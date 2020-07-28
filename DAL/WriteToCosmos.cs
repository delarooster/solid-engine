using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.Azure.Cosmos;
using solid_engine.Models;

namespace solid_engine.DAL
{
    public class WriteToCosmos
    {
        private Settings _settings;
        private CosmosClient cosmosClient;
        private Database database;
        private Container container;

        public WriteToCosmos()
        {
            _settings = new Settings();
        }

        private string databaseId = "TestDatabase";
        private string containerId = "TestContainer";

        public static async void Run(string username)
        {
            await Write(username);
        }

        public static async Task Write(string username, string[] args = null)
        {
            try
            {
                Console.WriteLine("Beginning operations...\n");
                WriteToCosmos p = new WriteToCosmos();
                await p.GetStartedDemoAsync(username);
            }
            catch (CosmosException de)
            {
                Exception baseException = de.GetBaseException();
                Console.WriteLine("{0} error occurred: {1}\n", de.StatusCode, de);
            }
            catch (Exception e)
            {
                Console.WriteLine("Error: {0}\n", e);
            }
            finally
            {
                Console.WriteLine("End of demo, press any key to exit.");
            }
        }

        /*
            Entry point to call methods that operate on Azure Cosmos DB resources in this sample
        */
        public async Task GetStartedDemoAsync(string username)
        {
            _settings.EndpointUri = "https://solid-core-cosmosdb.documents.azure.com:443/";
            _settings.PrimaryKey =
                "U5qQrCR9cau2QUVuC8lnjQfv9wTBQV5QDlIWM8CJMPt5ygYXpfG5xFMn33GNz5PKBvuvSpnLSQlbPExF6WrLrw==";
            // Create a new instance of the Cosmos Client
            this.cosmosClient = new CosmosClient(_settings.EndpointUri, _settings.PrimaryKey);
            await this.CreateDatabaseAsync();
            await this.CreateContainerAsync();
            await this.AddItemsToContainerAsync(username);
            await this.QueryItemsAsync();
            //await this.ReplaceFamilyItemAsync();
            //await this.DeleteFamilyItemAsync();
            //await this.DeleteDatabaseAndCleanupAsync();
        }

        /*
        Create the database if it does not exist
        */
        private async Task CreateDatabaseAsync()
        {
            // Create a new database
            this.database = await this.cosmosClient.CreateDatabaseIfNotExistsAsync(databaseId);
            Console.WriteLine("Created Database: {0}\n", this.database.Id);
        }
        private async Task CreateContainerAsync()
        {
            // Create a new container
            this.container = await this.database.CreateContainerIfNotExistsAsync(containerId, "/LastName");
            Console.WriteLine("Created Container: {0}\n", this.container.Id);
        }

        /*
        Add Family items to the container
        */
        private async Task AddItemsToContainerAsync(string userInfo)
        {
            var member = new Member
            {
                Id = "Anderson.1",
                Administrator = false,
                FirstName = "Irving",
                LastName = "Anderson"
            };

            ResponseMessage memberResponse = await this.container.ReadItemStreamAsync(member.Id, new PartitionKey(member.LastName));
            ItemResponse<Member> response = null;
            
            if (memberResponse.StatusCode == HttpStatusCode.NotFound)
            {
                response = await this.container.CreateItemAsync<Member>(member);

                Console.WriteLine($"Created item in database with id: {member.Id} Operation consumed {response.RequestCharge} RUs.\n", response.Resource.Id, response.RequestCharge);
            }
            else
            {
                Console.WriteLine($"Item in database with id: {member.Id} already exists\n", response.Resource.Id);
            }
        }

        private async Task QueryItemsAsync()
        {
            var sqlQueryText = "SELECT * FROM c";

            Console.WriteLine("Running query: {0}\n", sqlQueryText);

            QueryDefinition queryDefinition = new QueryDefinition(sqlQueryText);
            FeedIterator<Member> queryResultSetIterator = this.container.GetItemQueryIterator<Member>(queryDefinition);

            List<Member> families = new List<Member>();

            while (queryResultSetIterator.HasMoreResults)
            {
                FeedResponse<Member> currentResultSet = await queryResultSetIterator.ReadNextAsync();
                foreach (Member item in currentResultSet)
                {
                    families.Add(item);
                    Console.WriteLine("\tRead {0}\n", item);
                }
            }
        }

        /*
        Update an item in the container
        */
        //private async Task ReplaceFamilyItemAsync()
        //{
        //    ItemResponse<Member> wakefieldFamilyResponse = await this.container.ReadItemAsync<Member>("Wakefield.7", new PartitionKey("Wakefield"));
        //    var itemBody = wakefieldFamilyResponse.Resource;

        //    // update registration status from false to true
        //    itemBody.IsRegistered = true;
        //    // update grade of child
        //    itemBody.Children[0].Grade = 6;

        //    // replace the item with the updated content
        //    wakefieldFamilyResponse = await this.container.ReplaceItemAsync<Member>(itemBody, itemBody.Id, new PartitionKey(itemBody.LastName));
        //    Console.WriteLine("Updated Family [{0},{1}]\n. Body is now: {2}\n", itemBody.LastName, itemBody.Id, wakefieldFamilyResponse.Resource);
        //}

        /*
        Delete an item in the container
        */
        //private async Task DeleteFamilyItemAsync()
        //{
        //    var partitionKeyValue = "Wakefield";
        //    var familyId = "Wakefield.7";

        //    // Delete an item. Note we must provide the partition key value and id of the item to delete
        //    ItemResponse<Family> wakefieldFamilyResponse = await this.container.DeleteItemAsync<Family>(familyId, new PartitionKey(partitionKeyValue));
        //    Console.WriteLine("Deleted Family [{0},{1}]\n", partitionKeyValue, familyId);
        //}

        /*
        Delete the database and dispose of the Cosmos Client instance
        */
        //private async Task DeleteDatabaseAndCleanupAsync()
        //{
        //    DatabaseResponse databaseResourceResponse = await this.database.DeleteAsync();
        //    // Also valid: await this.cosmosClient.Databases["FamilyDatabase"].DeleteAsync();

        //    Console.WriteLine("Deleted Database: {0}\n", this.databaseId);

        //    //Dispose of CosmosClient
        //    this.cosmosClient.Dispose();
        //}
    }
}


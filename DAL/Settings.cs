using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Threading.Tasks;

namespace solid_engine.DAL
{
    public class Settings
    {
        public Settings()
        {
            EndpointUri = ConfigurationManager.AppSettings["CosmosDbEndpointUri"];
            PrimaryKey = ConfigurationManager.AppSettings["CosmosDbPrimaryKey"];
        }

        public string EndpointUri { get; set; }
        public string PrimaryKey { get; set; }
    }
}

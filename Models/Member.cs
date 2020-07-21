using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace solid_engine.Models
{
    public class Member
    {
        [JsonProperty(PropertyName = "id")]
        public string Id { get; set; } = "";
        [JsonProperty(PropertyName = "firstName")]
        public string FirstName { get; set; }
        [JsonProperty(PropertyName = "lastName")]
        public string LastName { get; set; }
        [JsonProperty(PropertyName = "administrator")]
        public bool Administrator { get; set; }

    }
}

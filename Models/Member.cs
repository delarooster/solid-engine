using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace solid_engine.Models
{
    public class Member
    {
        [JsonPropertyName("id")]
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool Administrator { get; set; }

    }
}

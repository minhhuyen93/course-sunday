namespace api.Service
{
    public class LogInResponse
    {
        public string Name { get; set; }
        public string Key { get; set; }
        public string Description { get; set; }
        public LogInResponse(string name, string key, string description)
        {
            this.Name = name;
            this.Key = key;
            this.Description = description;
        }
    }
}

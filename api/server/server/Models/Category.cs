namespace server.Models
{
    public class Category
    {
        public Category()
        {

        }
        public Category(int id, string name, string key, string description)
        {
            this.Id = id;
            this.Name = name;
            this.Key = key;
            this.Description = description;
        }
        public int Id { get; set; }
        public string Name { get; set; }
        public string Key { get; set; }
        public string Description { get; set; }
    }
}
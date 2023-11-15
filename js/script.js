const { createApp } = Vue;

createApp({
  data() {
    return {
      items: [
        {
          item: "Task list and assignments",
        },
        {
          item: "Set due date and assignments",
        },
        {
          item: "Remove duplicate tasks and stories",
        },
        {
          item: "Update the userflow and stories",
        },
        {
            item: "Adjust the components",
        },
      ],
      newItems: [],
     };
    },
  methods: {
    removeElement: function (index) {
        this.items.splice(index, 1);
      },
    
    addItem: function() {
      this.newItems.push({...this.items.item})
      this.items.item = "";
    }
  }
}).mount("#app");

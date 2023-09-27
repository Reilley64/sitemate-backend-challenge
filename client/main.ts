const {program} = require("commander");

program.command("create")
  .description("create an issue")
  .argument("[title]", "issue title")
  .argument("[description]", "issue description")
  .action(async (title: string, description: string) => {
    const response = await fetch("http://localhost:8080/issues", {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description
      })
    });

    const json = await response.json();

    console.log(json);
  });

program.command("read")
  .description("read an issue")
  .argument("<id>", "issue id")
  .action(async (id: string) => {
    const response = await fetch(`http://localhost:8080/issues/${id}`, {
      mode: "cors",
      method: "GET"
    });

    const json = await response.json();

    console.log(json);
  });

program.command("update")
  .description("update an issue")
  .argument("<id>", "issue id")
  .argument("[title]", "issue title")
  .argument("[description]", "issue description")
  .action(async (id: string, title: string, description: string) => {
    const response = await fetch(`http://localhost:8080/issues/${id}`, {
      mode: "cors",
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description
      })
    });

    const json = await response.json();

    console.log(json);
  });

program.command("delete")
  .description("delete an issue")
  .argument("<id>", "issue id")
  .action(async (id: string) => {
    const response = await fetch(`http://localhost:8080/issues/${id}`, {
      mode: "cors",
      method: "DELETE"
    });

    const json = await response.json();

    console.log(json);
  });

program.parse();

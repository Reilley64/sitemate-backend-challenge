const {program} = require("commander");

program.command("create")
  .description("create an issue")
  .argument("<title>", "issue title")
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

program.parse();

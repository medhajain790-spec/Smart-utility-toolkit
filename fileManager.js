let fs = require("fs");

console.log("Creating File...");

fs.writeFile("test.txt", "Hello Node.js", function (error) {
    if (error) {
        console.log("Error creating file");
        return;
    }

    console.log("File Created");
    console.log("Reading File...");

    fs.readFile("test.txt", "utf8", function (error, data) {
        if (error) {
            console.log("File not found");
            return;
        }

        console.log(data);
        console.log("Updating File...");

        fs.appendFile("test.txt", "\nLearning FS Module", function (error) {
            if (error) {
                console.log("Error updating file");
                return;
            }

            console.log("File Updated");

            fs.readFile("test.txt", "utf8", function (error, data) {
                if (error) {
                    console.log("Error reading file");
                    return;
                }

                console.log(data);
                console.log("Deleting File...");

                fs.unlink("test.txt", function (error) {
                    if (error) {
                        console.log("File does not exist");
                        return;
                    }

                    console.log("File Deleted");
                });
            });
        });
    });
});

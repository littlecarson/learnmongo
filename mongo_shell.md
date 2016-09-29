## Start mongo (mongo shell)

Once I have installed and have started MongoDB, connect the mongo shell to my running MongoDB instance. Ensure that MongoDB is running before attempting to launch the mongo shell.

On the same system where the MongoDB is running, open a terminal window (or a command prompt for Windows) and run the mongo shell with the following command:
    
    mongo
On Windows systems, add .exe as follows:

	mongo.exe
You may need to specify the path as appropriate.

When I run mongo without any arguments, the mongo shell will attempt to connect to the MongoDB instance running on the localhost interface on port 27017. To specify a different host or port number, as well as other options, see 
>mongo Shell Reference Page.

## Help in mongo Shell

Type help in the mongo shell for a list of available commands and their descriptions:

	help
The mongo shell also provides 'tab' key completion as well as keyboard shortcuts similar to those found in the bash shell or in Emacs. For example, you can use the 'up-arrow' and the 'down-arrow' to retrieve operations from its history.

## Mongodb统计信息

查看数据库的名称、集合数目以及文档相关信息命令：

    db.stats()
    
## Working with mongo Shell
```
# Start mongo Shell
$ mongo

# Exit mongo Shell
$ quit() // or press ctrl^c

# To clear screen
> cls
> 
# To display the database using
> db

# To switch database
> use [databasename]

# To show database
> show dbs

# To show collection, having select database.
> show collections 

```


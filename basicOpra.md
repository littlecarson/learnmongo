# Mongodb Basic

## Create Data Base

### `use` command

    use DataBaseName

If exist, return it; not, create a new data base.
    
    db

Checking which data base having selected now.

    show dbs

Checking the list of dbs
刚创建的数据库需要至少存在一个文档

## Drop Data Base

### function of dropDatabase()

    db.dropDatabase()

将选中的数据库删除，如果没有选中数据库将会删除`test`数据库。

## Create Collection

### command：`show collections` 

查看已创建的集合。

    show collections

### function of createCollection()

    db.createCollection(name,options)

* name(string): 表示创建的集合名称。
* options(document): 可选，指定内存相关及索引。
* optons选项表:

|   字段  |   类型  |   描述（可选）  |
|:------: |:-------:|:---------------:|
| capped  | boolean | true为固定集合（必须指定最大值），到MAX时覆盖最早的文档 |
| autoIndexID| boolean | true时自动在_id字段创建索引。默认为false |
| size    | num     | 为固定集合指定最大值    |
| max     | num     | 指定固定集合包含文档的最大数量 |

>其实在Mongodb中，插入文档时，标识了的集合会自动创建。


## Drop Collection

### function of `drop()`

    db.COLLECTION_NAME.drop()   
删除成功返回true,否则false.


## Insert Document

### function of `insert()`

    db.COLLECTION_NAME.insert(document)
在插入的文档中，如果我们没有指定 _id 参数，那么 MongoDB 会自动为文档指定一个唯一的 ID


## Query Document

### function of `find()`

    db.COLLECTION_NAME.find()
`find()` 方法会以非结构化的方式来显示所有文档。

## function of `pretty()`

    db.COLLECTION_NAME.find().pretty()
用格式化方式显示结果。
    
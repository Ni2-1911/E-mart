1. POST http://localhost:5000/product/filterByPrice
```
{
    "price":200
}
```
2. POST http://localhost:5000/product/create

```
{
    "name":"product-for tag 9",
    "imageLink":"1233",
    (optional)
    "tags":[{ 
        "_id":"62acdb999e9c1145e43cddb2"
        },
    ],
    "price":130
}
```

3. POST http://localhost:5000/product/findByName
```
{
    "name":name
}
```

4. POST http://localhost:5000/tags/find
```
{
    "name":name_of_tag
}
```

{
    "name":"RING",
    "imageLink":"https://i.pinimg.com/originals/e4/91/8b/e4918be97aae986f1f10d755807f4652.jpg",
    "tags":[{ 
        "id":"62ade941921f4a0e645cd8a6"
        }
    ],
    "price":130
}


{
    "name":"MAKE UP KIT",
    "imageLink":"https://media.beautyplaza.com/data/hbb24/width1240/254473.jpg",
    "tags":[{ 
        "_id":"62acdb999e9c1145e43cddb2"
        }
    ],
    "price":1000,
    "tagsUI" : [
        "LOREAL",
        "LIP GLOSS",
        "EYE LINER"
    ]
}
// add products===========>


{
    "firstName" : "Admin",
    "lastName" : "Admin",
    "email" : "admin@admin.com",
    "password" : "admin@admin.com",
    "passwordVerify" : "admin@admin.com"
}
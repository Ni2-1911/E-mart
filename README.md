# E-MART
MERN E-commerce website 

## TECH STACK
> Frontend -> React JS & BootStrap

> Backend -> Node JS & Express JS

> Database-> MongoDB

## Installation process
1. #### clone the repo using this command
    ```bash
    git clone https://github.com/Ni2-1911/E-mart.git
    ```
2. #### install npm packages
    1. install backend packages
    ```bash
    cd server
    npm install
    ```
    2. install frontend packages
    ```bash
    cd client
    npm install
    ```
3. go to the parent folder of mern-ecommerce & create .env for connection, JWT_SECRET, MDB_CONNECT

    ```bash
    cd mern-ecommerce
    sudo nano .env
    ```
    (ctrl+x to save & nano follow instruction there)
    
    ##### sample code for backend .env
    ```env
    MDB_CONNECT=YOUR_MONGODB_URI
    JWT_SECRET=YOUR_JWT_SECRET
    ```

### App Description:
    1. user can view all products
    2. user can view single product
    3. user can search products and view products by category and price range
    4. user can add to cart checkout products using credit card info
    5. user can register & sign in
    6. admin can create, edit, update & delete products
    7. admin can create categories
    8. admin can view ordered products
    9. admin can change the status of a product (processing, shipped, delivered, etc.)

6. <b>Deployed on</br> https://sunny-llama-feca02.netlify.app/

7. DEMO

## HOME PAGE
![/HOME](https://github.com/Ni2-1911/E-mart/blob/main/Home.jpg)

## SIGN UP PAGE
![/SIGN UP]([https://github.com/Ni2-1911/E-mart/blob/main/Home.jpg](https://github.com/Ni2-1911/E-mart/blob/main/SignUp.jpg))



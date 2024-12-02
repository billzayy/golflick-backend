-- Modify Max Connection
ALTER SYSTEM SET max_connections = 9999;

-- CREATE TABLES
CREATE TABLE Users(
    user_id         uuid            DEFAULT         gen_random_uuid()   PRIMARY KEY,
    first_name      VARCHAR(255)    NOT NULL,
    last_name       VARCHAR(255)    NOT NULL,
    email           VARCHAR(255)    NOT NULL,
    password        VARCHAR(255)    NOT NULL,
    avatar          VARCHAR(255)    NULL,
    role            INTEGER         NOT NULL
);

CREATE TABLE Blog(
    user_id         uuid            NOT NULL,
    blog_article    VARCHAR(255)    NOT NULL,
    blog_post       VARCHAR(255)    NOT NULL,
    date_post       DATE            NOT NULL,
    FOREIGN KEY(user_id) REFERENCES Users(user_Id)
);

CREATE TABLE Bank_Type(
    bank_type_id    SERIAL          NOT NULL    PRIMARY KEY,
    bank_type_name  VARCHAR(255)    NOT NULL,
    bank_type_pic   VARCHAR(255)    NOT NULL
);

CREATE TABLE Account(
    account_id      uuid            NOT NULL,
    user_id         uuid            NOT NULL,
    bank_type_id    INTEGER         NOT NULL,
    account_number  VARCHAR(255)    NOT NULL,
    FOREIGN KEY(bank_type_id) REFERENCES Bank_Type(bank_type_id),
    FOREIGN KEY(user_id) REFERENCES Users(user_id)
);

CREATE TABLE Address(
    user_id         uuid            NOT NULL,
    street_address  VARCHAR(255)    NOT NULL,
    country         VARCHAR(255)    NOT NULL,
    town_city       VARCHAR(255)    NOT NULL,
    state           VARCHAR(255)    NULL,
    zip_code        INTEGER         NOT NULL,
    FOREIGN KEY(user_id) REFERENCES Users(user_Id)
);

CREATE TABLE Brand(
    brand_id        SERIAL          NOT NULL     PRIMARY KEY,
    brand_name      VARCHAR(255)    NOT NULL
);

CREATE TABLE Type(
    type_id         SERIAL          NOT NULL     PRIMARY KEY,
    type_name       VARCHAR(255)    NOT NULL
);

CREATE TABLE Category(
    category_id     uuid            NOT NULL        PRIMARY KEY,
    category_name   VARCHAR(255)    NOT NULL,
    category_pic    VARCHAR(255)    NOT NULL,
    brand_id        INTEGER         NOT NULL,
    type_id         INTEGER         NOT NULL,
    FOREIGN KEY(brand_id) REFERENCES Brand(brand_id),
    FOREIGN KEY(type_id) REFERENCES Type(type_id)
);

CREATE TABLE Product(
    product_id      uuid            NOT NULL    PRIMARY KEY,
    category_id     uuid            NOT NULL,
    product_name    VARCHAR(255)    NOT NULL,
    product_description     VARCHAR(255)    NULL,
    addition_detail VARCHAR(255)    NOT NULL,
    available_status INTEGER        NOT NULL,
    product_price   DOUBLE PRECISION           NOT NULL,
    product_sale    INTEGER         NULL,
    FOREIGN KEY(category_id) REFERENCES Category(category_id)
);

CREATE TABLE Review(
    review_id    SERIAL             NOT NULL    PRIMARY KEY,
    product_id   uuid               NOT NULL,
    star         DOUBLE PRECISION   NOT NULL,
    comment      VARCHAR(255)       NOT NULL,
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);

CREATE TABLE Wishlist(
    wishlist_id     SERIAL          NOT NULL    PRIMARY KEY,
    product_id      uuid            NOT NULL,
    FOREIGN KEY(product_id) REFERENCES Product(product_id)
);

CREATE TABLE Billing(
    billing_id      uuid            NOT NULL    PRIMARY KEY,
    billing_date    TIMESTAMP WITH TIME ZONE    NOT NULL,
    billing_status  INTEGER         NOT NULL,
    billing_price   DOUBLE PRECISION           NOT NULL
);

CREATE TABLE Coupon(
    coupon_id       uuid            NOT NULL    PRIMARY KEY,
    coupon_name     VARCHAR(255)    NOT NULL,
    coupon_sale     VARCHAR(255)    NOT NULL
);

CREATE TABLE Orders(
    billing_id      uuid            NOT NULL,
    product_id      uuid            NOT NULL,
    coupon_id       uuid            NOT NULL,
    FOREIGN KEY(billing_id) REFERENCES Billing(billing_id),
    FOREIGN KEY(product_id) REFERENCES Product(product_id),
    FOREIGN KEY(coupon_id) REFERENCES Coupon(coupon_id)
);

CREATE TABLE Carts(
    product_id      uuid            NOT NULL,
    quantity        INTEGER         NOT NULL,
    sub_total       DOUBLE PRECISION NOT NULL,
    FOREIGN KEY(product_id) REFERENCES Product(product_id)
);

CREATE TABLE Pictures(
    picture_id      uuid            NOT NULL    PRIMARY KEY,
    product_id      uuid            NOT NULL,
    pic_name        VARCHAR(255)    NULL,
    url             VARCHAR(255)    NULL,
    FOREIGN KEY(product_id) REFERENCES Product(product_id)
);
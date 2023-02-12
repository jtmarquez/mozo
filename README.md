# Mozo

A small project made for restaurants with high amounts of group clients, this is, tables with many clients, who usually want to pay seperatelly.

- The initial idea is:

1. The waiter scan the bill.

- When uploaded, the app will translate this into a list of the possible products shown on the bill that also belong to the restaurant itself.

2. A list of products will be shown to the waiter, who needs to corroborate the products, and add/delete products if needed. If everything looks ok, then the waiter must confirm the products.
3. Once the products are confirmed, the waiter can show the customers a qr code to the clients, taking them to the platform and asking them to enroll their products.
4. While there are remaining unenrolled products by the clients, then the waiter can't move to the next step(payment).
5. Once all the products are enrolled and matched by the original bill, then the waiter must move to the payment step. In this part of the process, the customers are shown differente payment methods.
6. When all of the customers have paid, the order is finished.

# Technologies used

- I am using the serverless framework with AWS lambdas and api gateway to expose the app to the world.
- Regarding persistance of data, i am using sequelize as an ORM and postgres as my database system with RDS on AWS.
- I plan on using AWS S3 to save the uploaded bills,
- One of the trickiests parts of this project is translating the bill to products. One possible solution is using AWS Textract.

# Architecture

This project is divided in layers:

- Controller: business logic
- Actions: Interacts with the database
- Models: Models saved on the database
- Database

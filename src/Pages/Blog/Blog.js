import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="container mx-auto flex flex-wrap py-6">
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          <article className="flex flex-col shadow my-4">
            <a href="#" className="hover:opacity-75">
              <img src="https://www.cronj.com/blog/wp-content/uploads/Artboard-3.png" />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a
                href="#"
                className="text-blue-700 text-sm font-bold uppercase pb-4"
              >
                Technology
              </a>
              <a
                href="#"
                className="text-3xl font-bold hover:text-gray-700 pb-4"
              >
                CORS?
              </a>
              <p href="#" className="text-sm pb-8">
                By{" "}
                <a href="#" className="font-semibold hover:text-gray-800">
                  Md. Asif Ullah Sikder
                </a>
                , Published on October 27th, 2020
              </p>
              <h1 className="text-2xl font-bold pb-3">Difference between sql and nosql</h1>
              <p className="pb-3">
              SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
              </p>
              
                <div>
                
                    <li>
                    SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. <br /> <br />
                    </li>
                    <li>
                    SQL databases defines and manipulates data based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. 
                    A NoSQL database has dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based or organized as a KeyValue store. This flexibility means that documents can be created without having defined structure first. Also each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. <br /> <br />
                    </li>

                    <li>
                    In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU or SSD. But on the other hand NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets. 
                    </li> <br /> <br />

                    <li>
                    SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure.  <br /> <br />
                    </li>

                    <li>
                    Great support is available for all SQL database from their vendors. Also a lot of independent consultations are there who can help you with SQL database for a very large scale deployments but for some NoSQL database you still have to rely on community support and only limited outside experts are available for setting up and deploying your large scale NoSQL deployments.
                    </li>
                
                </div>
               
            </div>
          </article>
          <article className="flex flex-col shadow my-4">
            <a href="#" className="hover:opacity-75">
              <img src="https://repository-images.githubusercontent.com/23680678/75406880-a413-11e9-91f7-f49d0a962d49" />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a
                href="#"
                className="text-blue-700 text-sm font-bold uppercase pb-4"
              >
                Technology
              </a>
              <a
                href="#"
                className="text-3xl font-bold hover:text-gray-700 pb-4"
              >
                JWT
              </a>
              <p href="#" className="text-sm pb-8">
                By{" "}
                <a href="#" className="font-semibold hover:text-gray-800">
                  Md. Asif Ullah Sikder
                </a>
                , Published on November 2nd, 2020
              </p>
              <h1 className="text-2xl font-bold pb-3">What is JWT?</h1>
              <p className="pb-3">
              JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.
              </p>

              <h1 className="text-2xl font-bold pb-3">
              How does JWT work?
              </h1>
              <p className="pb-3">
              JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. <br /> <br />

                A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz. <br /> <br />

                <span className="text-lg font-bold">
                Once decoded, you will get two JSON strings:
                </span>

                <li>
                The <span className="font-bold">header</span> and the <span className="font-bold">payload</span>.
                </li>
                <li>
                The <span className="font-bold">signature</span>.</li> <br />
                
                The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.  

                The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others. 

                The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. 
              </p>
            </div>
          </article>
          <article className="flex flex-col shadow my-4">
            <a href="#" className="hover:opacity-75">
              <img src="https://www.atliq.com/wp-content/uploads/2022/06/Know-the-difference-between-javascript-and-node-js-1-1-1.jpg" />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a
                href="#"
                className="text-blue-700 text-sm font-bold uppercase pb-4"
              >
                Technology
              </a>
              <a
                href="#"
                className="text-3xl font-bold hover:text-gray-700 pb-4"
              >
                Javascript VS NodeJS
              </a>
              <p href="#" className="text-sm pb-8">
                By
                <a href="#" className="font-semibold hover:text-gray-800">
                  Md. Asif Ullah Sikder
                </a>
                , Published on October 24th, 2020
              </p>
              <h1 className="text-2xl font-bold pb-3">
              What is the difference between javascript and NodeJS?
              </h1>
              <div className="pb-3">
              JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
              <br />
              <p>
              <span className="font-bold text-2xl mr-5">1.</span>
              Javascript is a programming language that is used for writing scripts on the website. <br />
              NodeJS is a Javascript runtime environment. 
              </p>
              <p>
              <span className="font-bold text-2xl mr-5">2.</span>
              Javascript can only be run in the browsers. <br />
              We can run Javascript outside the browser with the help of NodeJS.
              </p>
              <p>
              <span className="font-bold text-2xl mr-5">3.</span>
              It is basically used on the client-side. <br />
              It is mostly used on the server-side.
              </p>
              <p>
              <span className="font-bold text-2xl mr-5">4.</span>
              Javascript is capable enough to add HTML and play with the DOM. <br />
              Nodejs does not have capability to add HTML tags.
              </p>
              <p>
              <span className="font-bold text-2xl mr-5">5.</span>
              Some of the javascript frameworks are RamdaJS, TypedJS, etc. <br />
              Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.
              </p>
              <p> <span className="font-bold text-2xl mr-5">6.</span> 
              It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. <br />
               Nodejs is written in C, C++ and Javascript.
              </p>
              </div>
            </div>
          </article>
          <article className="flex flex-col shadow my-4">
            <a href="#" className="hover:opacity-75">
              <img src="https://kinsta.com/wp-content/uploads/2021/05/what-is-node-js-featured-image.jpg" />
            </a>
            <div className="bg-white flex flex-col justify-start p-6">
              <a
                href="#"
                className="text-blue-700 text-sm font-bold uppercase pb-4"
              >
                Technology
              </a>
              <a
                href="#"
                className="text-3xl font-bold hover:text-gray-700 pb-4"
              >
                NodeJS
              </a>
              <p href="#" className="text-sm pb-8">
                By
                <a href="#" className="font-semibold hover:text-gray-800">
                  Md. Asif Ullah Sikder
                </a>
                , Published on October 20th, 2020
              </p>
              <h1 className="text-2xl font-bold pb-3">How does NodeJS handle multiple requests at the same time?</h1>
              <p className="pb-3">
                Node.js is an open-source, cross-platform, back-end JavaScript
                runtime environment that runs on a JavaScript Engine and
                executes JavaScript code outside a web browser, which was
                designed to build scalable network applications.

                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.

                NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br />

                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
              </p>

            </div>
          </article>

          <div className="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6">
            <div className="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
              <img
                src="https://scontent.fdac145-1.fna.fbcdn.net/v/t39.30808-6/297550111_3210205875919800_8028134395698822348_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE-kTIHP3OkWTys5ddqFJh2hD40ECx8FyCEPjQQLHwXIEXnsUf8L8svjVISEqN8MAc7DTasbgNVdGxD9Dfw6dUV&_nc_ohc=VbSylmAtPfwAX9Xi-9Z&_nc_ht=scontent.fdac145-1.fna&oh=00_AfCDHkkemxpqUaL6p-g7nfpQdMfUaXBsYICWdWIPdssuqA&oe=636FB427"
                className="rounded-full shadow h-32 w-32"
              />
            </div>
            <div className="flex-1 flex flex-col justify-center md:justify-start">
              <p className="font-semibold text-2xl">Md. Asif Ullah Sikder</p>
              <p className="pt-2">
                Honest and have a very good manner. I spend my time to work on
                development because it's my passion I like fruit, ice-cream and
                my most favorite biryiaani and like to play Chess.
              </p>
              <div className="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4">
                <a className="" href="https://www.facebook.com/asifullahsikder">
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  className="pl-4"
                  href="https://www.instagram.com/asifullahsikder/"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="pl-4" href="https://twitter.com/asifsikder23">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="pl-4"
                  href="https://www.linkedin.com/in/md-asif-ullah-sikder-a6993b178/"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full md:w-1/3 flex flex-col items-center px-3">
          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">About Us</p>
            <p className="pb-2">
              The way we work has been irreversibly disrupted. Covid-19 has
              unmasked a desire for people to work on their own terms. At their
              own pace. In their own environment. As hybrid workplaces
              increasingly become the norm, hybrid learning is reinventing the
              way we approach professional and on-the-job training & education.
              Let our guide be your guide to adopting hybrid learning into your
              training programs.
            </p>
            <a
              href="#"
              className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4"
            >
              Get to know us
            </a>
          </div>

          <div className="w-full bg-white shadow flex flex-col my-4 p-6">
            <p className="text-xl font-semibold pb-5">Instagram</p>
            <div className="grid grid-cols-3 gap-3">
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
              />
              <img
                className="hover:opacity-75"
                src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
              />
            </div>
            <a
              href="#"
              className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-6"
            >
              <i className="fab fa-instagram mr-2"></i> Follow @e-guru
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

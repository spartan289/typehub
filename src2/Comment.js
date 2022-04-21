import reactDom from "react-dom";
import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpSHAPJJMiUZolEojasZLQQFBk9mDk6EU",
  authDomain: "cafenista-66c18.firebaseapp.com",
  databaseURL:
    "https://cafenista-66c18-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cafenista-66c18",
  storageBucket: "cafenista-66c18.appspot.com",
  messagingSenderId: "596044648831",
  appId: "1:596044648831:web:baedd81985c057fcfd8a4a",
  measurementId: "G-Y8JP9FS9RL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  getDocs,
} from "firebase/firestore";
import { async } from "@firebase/util";
import React from "react";

document.addEventListener("submit", (e) => {
  e.preventDefault();
  comment_submit();
});

async function comment_submit() {
  let comment_form = new FormData(document.getElementById("comment_form"));
  let comment_content = comment_form.get("comment_content");
  let user_name = comment_form.get("user_name");
  console.log(comment_content);
  try {
    const docRef = await addDoc(
      collection(db, "/comment/o8rL7lTffHjOct7Vg2jH/comm/"),
      {
        comm_content: comment_content,
        comm_userid: user_name,
        comm_date: new Date(),
        comm_like: 0,
        comm_dislike: 0,
        comm_id: "sdfsdf",
      }
    );
    console.log("Document written with ID: ", docRef);
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

function getd() {
  const docRef = doc(db, "/comment/o8rL7lTffHjOct7Vg2jH");
  console.log(doc1.data);
}
// get all data
// async function getAllData(db) {
//   const doc1 = await getDocs(
//     collection(db, "/comment/o8rL7lTffHjOct7Vg2jH/comm/")
//   );
//   console.log(doc1);
//   doc1.forEach((doc) => {
//     console.log(doc.data());
//   });
// }
// getAllData(db);
var comment_document;
async function getcomment(db) {
  const article_document = await getDocs(collection(db, "/comment"));
  article_document.forEach(async (doc) => {
    const comment = collection(db, "/comment/" + doc.id + "/comm");
    comment_document = getDocs(comment);
  });
  return comment_document;
}
const Full_Comment = () => {
  const [comment_datajsx, setval] = useState([]);
  const Comment = async () => {
    comment_document = await getcomment(db).then((comment_document) => {
      let c = 0;
      console.log(comment_document);
      let comment_datajsx = [];
      comment_document.forEach((doc) => {
        let doc_data = doc.data();
        comment_datajsx.push(doc_data);
        console.log(doc.data());
        c = c + 1;
        console.log(comment_datajsx);
      });
      setval(comment_datajsx);
      // var json_fullcommentbox = JSON.stringify(comment_datajsx);
    });
  };

  useEffect(() => {
    Comment();
    console.log(comment_datajsx);
  }, []);
  console.log(comment_datajsx);
  let jsxcomment = comment_datajsx.map((comment_data, index) => (
    <div key={index}>
      <Single_comment
        comm_content={comment_data.comm_content}
        comm_userid={comment_data.comm_userid}
      />
    </div>
  ));
  return <div>{jsxcomment}</div>;
  // console.log(comment_document);
};

// console.log(comment_json);
const Reply = ({ reply_content, reply_user }) => {
  return (
    <div className="card card-inner">
      <div className="card-body">
        <div className="row">
          <div className="col-md-2">
            <img
              src="https://image.ibb.co/jw55Ex/def_face.jpg"
              className="img img-rounded img-fluid"
            />
            <p className="text-secondary text-center">15 Minutes Ago</p>
          </div>
          <div className="col-md-10">
            <p>
              <a href="https://maniruzzaman-akash.blogspot.com/p/contact.html">
                <strong>{reply_user}</strong>
              </a>
            </p>
            <p>{reply_content}</p>
            <p>
              <a className="float-right btn btn-outline-primary ml-2">
                {" "}
                <i className="fa fa-reply"></i>
                Reply
              </a>
              <a className="float-right btn text-white btn-danger">
                {" "}
                <i className="fa fa-heart"></i>
                Like
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Single_comment = ({ comm_userid, comm_content }) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-md-2">
              <img
                src="https://image.ibb.co/jw55Ex/def_face.jpg"
                className="img img-rounded img-fluid"
              />
              <p className="text-secondary text-center">15 Minutes Ago</p>
            </div>
            <div className="col-md-10">
              <p>
                <a
                  className="float-left"
                  href="https://maniruzzaman-akash.blogspot.com/p/contact.html"
                >
                  <strong>{comm_userid}</strong>
                </a>
                <span className="float-right">
                  <i className="text-warning fa fa-star"></i>
                </span>
                <span className="float-right">
                  <i className="text-warning fa fa-star"></i>
                </span>
                <span className="float-right">
                  <i className="text-warning fa fa-star"></i>
                </span>
                <span className="float-right">
                  <i className="text-warning fa fa-star"></i>
                </span>
              </p>
              <div className="clearfix"></div>
              <p>{comm_content}</p>
              <p>
                <a className="float-right btn btn-outline-primary ml-2">
                  {/* {" "} */}
                  <i className="fa fa-reply"></i> Reply
                </a>
                <a className="float-right btn text-white btn-danger">
                  {/* {" "} */}
                  <i className="fa fa-heart"></i> Like
                </a>
              </p>
            </div>
          </div>

          <Reply reply_content={"hello world"} reply_user={"akash"} />
        </div>
        a{" "}
      </div>
    </div>
  );
};
// const Comment = (comment_document) => {
//   console.log(comment_document);
//   comment_document.forEach((doc) => {
//     let doc_data = doc.data();
//     comment_userid = doc_data.comm_userid;
//     comment_content = doc_data.comm_content;
//     return (
//       <Single_comment
//         comm_content={comment_content}
//         comm_userid={comment_userid}
//       />
//     );
//   });
// };
reactDom.render(<Full_Comment />, document.getElementById("comment_read"));

// class Comment extends React.Component {
//   render() {
//     return <div></div>;
//   }
// }

import React from "react";

import "./s24Evertz.css";

const S24Evertz = () => {
    return (
        <div className="blog-post">
        <img className="company-logo" src="assets/evertz.png" alt="Could not load image" />
        <header className="blog-header">
          <h1 className="blog-title">Evertz - Summer 2024</h1>
          <p className="blog-date">Published on: September 9, 2024</p>
        </header>
        <section className="blog-section">
          <h2 className="section-title">Introduction</h2>
          <p className="content">
            &emsp;From May through August of 2024, I worked as a Software Developer Intern at Evertz Microsystems Ltd. in Burlington, Ontario. This report provides an overview of the organization, outlines my personal learning goals, and details my responsibilities and achievements during this work term.
          </p>
        </section>
        <section className="blog-section">
          <h2 className="section-title">Information About Evertz</h2>
          <p className="content">
            &emsp;Evertz Microsystems Ltd. is a leading global manufacturer of broadcast and media production equipment, offering comprehensive end-to-end solutions for broadcast, satellite, cable TV, and telecommunications industries.<br /><br />
            &emsp;Evertz.io is a Software as a Service platform that allows cloud video services for content owners and creators. This service fully manages platform maintenance, backend engineering, and cloud scaling, alowing customers to focus their resources entirely on operations. They work with companies such as Disney, Warner Bros, NBC, HBO, Paramount, and more.
          </p>
          <br />
          <img className="coop-image" src="assets/coop-image.jpeg" alt="Could not load image" />
        </section>
        <section className="blog-section">
          <h2 className="section-title">Job Description</h2>
          <p className="content">
            &emsp;In my role at Evertz.io I worked as a backend and frontend developer, focusing on tasks involving AWS services, Git management, and API development. I collaborated closely with team members, participated in code reviews, and regularly attended meetings to align on project goals. My responsibilities included designing efficient solutions using AWS, managing source code with Git, and working with various APIs to support the development of innovative media production tools.
          </p>
        </section>
        <section className="blog-section">
          <h2 className="section-title">Goals</h2>
          <p className="content">
          <h3>&emsp;-&emsp;Gain an understanding of different AWS services<br /></h3>
          &emsp;AWS is a huge part of many backend service offerings, and I wanted to deepen my knowledge of the various services available and how they can be used to build scalable and reliable applications. To achieve this, I took on tasks that involved working with multiple AWS services such as Step Functions, S3, DynamoDB, Lambda, API Gateway, and more, gaining hands-on experience in deploying and managing cloud-based applications.<br /><br />
          &emsp;I was able to reach my goal, and take it further, learning about CloudFormation and CDK templates to create these services and resources in a more automated and scalable way. This understanding of AWS will be beneficial both in my professional career and personal projects.<br /><br /> 

          <h3>&emsp;-&emsp;Further my understanding of the services Git offers<br /></h3>
          &emsp;Git is a well-known control system that is used by many companies. While I have used Git before for school and personal use, I've never been able to use Git to its full potential. As I use GitHub at Evertz, I made it a goal of mine to develop a better understanding by attending Git seminars hosted by Evertz.<br /><br />
          &emsp;I feel much more comfortable now navigating branches, pull requests, and handling merge conflicts, none of which I was able to do before my time at Evertz. This is an extremely essential skill as it is something I would be expected to know going forward, and is also very important in managing my own projects.<br /><br /> 

          <h3>&emsp;-&emsp;Learn about working with API's and Postman effectively<br /></h3>
          &emsp;API's (and Websockets) are arguably the backbone of backend services. I had very little experience with API's and none with Postman going in, so I felt it was important to learn about these technologies.<br /><br />
          &emsp;To achieve this, I strived towards understanding every request and response I made through Postman, and understanding exactly how the request is parsed in the code. I reached a point where I was able to add new endpoints to both the API and Websocket, and effectively accept requests, perform tasks, and send meaningful responses.<br /><br /> 

          <h3>&emsp;-&emsp;Improve my problem solving skills<br /></h3>
          &emsp;Although the title is general, one of my main goals is simply developing better problem solving skills. Evertz is my first professional programming job, and the first time I am working on a code base that is not my own. I wanted to reach a level where I can be assigned a task or discover a bug, then create and implement a solution without any assistance.<br /><br />
          &emsp;Throughout my work term, I gained more and more confidence working with the code base and understanding how all the different microservices worked together. I was able to effectively troubleshoot any bugs, and I could generally complete tasks without assistance.<br /><br /> 
          </p>
        </section>
        <section className="blog-section">
          <h2 className="section-title">Conclusion</h2>
          <p className="content">
            &emsp;Overall, this work term helped me refine my technical skills and deepen my understanding of industry-standard tools including AWS, Git, and Postman. More importantly, as my first professional work experience, I was able to see a side of software engineering that I had not experienced before. I am grateful for the guidance and support of my colleagues at Evertz, who provided valuable mentorship and helped me grow as a developer. I look forward to applying the knowledge and skills I gained during this work term to future projects and opportunities.
          </p>
        </section>
        <section className="blog-section">
          <h2 className="section-title">Acknowledgements</h2>
          <p className="content">
            &emsp;I would like to express my gratitude to the team at Evertz Microsystems for providing me with the opportunity, and all members of my team, who were very helpful and forthcoming. I'd like to specifically thank Stephen Hazra and Abu Saeed for their mentorship and guidance throughout my work term.<br /><br />
            I could not have asked for a better team to work with, and I am grateful for the experience and knowledge I gained during my time at Evertz! 
          </p>
        </section>
        <img className="coop-image" src="assets/evertz-building.jpg" alt="Could not load image" />
        <footer className="blog-footer">
          <p>Written by: Nathan Probert</p>
        </footer>
      </div>
    );
};

export default S24Evertz;

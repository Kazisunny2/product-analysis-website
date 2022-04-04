import React from 'react';

const Blogs = () => {
    return (
        <div>
           <div>
           <h1>What is Context API? </h1>
            <p>The React Context API is a new API built into recent versions of React, which allows developers to share data and functions between higher and lower levels in a Component Tree, without having to pass these data and functions as props through all the intermediate levels. The React Context API decouples producers of data and functions, higher in the Component Tree, from consumers of these data and functions, lower in the Component Tree. It also avoids the need to modify or wrap intermediate components, so that they do not need to change in order to allow developers to pass data and functions to lower levels in the Component Tree. A React Context API has two concepts: a Provider and a Consumer. The Provider sits higher up in the Component Tree, and provides data and functions for lower portions of the Component Tree to access.</p>
           </div>
           <div>
               <h1>What is Semantic Tag?</h1>
               <p> HTML tags are (mostly) used to format content - these tags tell the browser how to display the content on the page. They give no indication as to what type of content they contain or what role that content plays in the page. Semantic HTML5 addresses this shortcoming by defining specific tags to indicate clearly what role is played by the content those tags contain. That explicit information helps robots/crawlers like Google and Bing to better understand which content is important, which is a subsidiary, which is for navigation, and so on. By adding semantic HTML tags to your pages, you provide additional information that helps Google and Bing understand the roles and relative importance of the different parts of your page.</p>
           </div>
        </div>
    );
};

export default Blogs;
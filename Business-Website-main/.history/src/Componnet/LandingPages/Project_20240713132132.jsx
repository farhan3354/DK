import React from 'react';

const Project = () => {
  return (
    <div className="container ">
      <div className="bg-amber-100 flex justify-center items-center">
      <div className="bg-amber-100 flex justify-center items-center">
  <img
    className="max-w-xs  max-h-10%"  // Adjusted max-h-4/5 for 20% height decrease
    src="https://dkgroup.pk/wp-content/uploads/2024/03/Screenshot_2024-02-29_at_17-17-52_funnel.pdf-removebg-preview.png"
    alt="Project Image"
  />
</div>

</div>

      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/3 ">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-xl overflow-hidden  bg-white ">
            <img
              className="lg:h-54 md:h-30 w-full object-cover object-center rounded-xl"
              src="https://dummyimage.com/720x400"
              alt="blog"
            />
            <div className="p-6 text-center">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
              <p className="leading-relaxed">What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Project;

// import React from 'react';

// export default function ContentfulPersonIntroductionGrid({
//   personIntroductions,
// }) {
//   console.log('personIntroductions:', personIntroductions);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {personIntroductions.map((person, index) => (
//         <div key={index} className="bg-white shadow-md rounded-lg p-4">
//           <img
//             src={person.personPicture.file.url}
//             alt={person.personName}
//             className="w-full h-48 object-cover rounded-t-lg"
//           />
//           <h3 className="text-xl font-bold mt-2">{person.personName}</h3>
//           <p className="text-gray-600">{person.title}</p>
//           <p className="mt-2">{person.phone}</p>
//           <p>{person.email}</p>
//           {person.personIntroduction &&
//             person.personIntroduction.childMarkdownRemark && (
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: person.personIntroduction.childMarkdownRemark.html,
//                 }}
//                 className="mt-2"
//               />
//             )}
//         </div>
//       ))}
//     </div>
//   );
// }

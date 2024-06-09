
// import React, { useCallback, useEffect, useMemo, useState } from "react";
// import { useSession } from "next-auth/react";
// import UserDetails from "@/components/ui/userDetails/UserDetails";
// import EmailActions from "@/components/ui/EmailActions/EmailActions";
// import EmailList from "@/components/ui/EmailList/EmailList";
// import SpinningLoader from "@/components/ui/SpinningLoader/SpinningLoader";
// import { redirect } from "next/navigation";
// import { toast } from "react-toastify";

// const PROMPT = `
//  The rules of the labels were also added in the promt; you can find that inside the <rules> tag. Take the array of objects inside the codePrefix tag, go through its object, read the "snippet" property, and assign the label like promotions, spam, and general based on the snippets content. Please be aware that your output will simply be an array; no explanation language is required. For instance, if the array has two elements, the resultant array will always consist of two arrays plus an additional property categorization. and each time you generate, the result's format needs to be the same.Do NOT preface your answer or write anything other than array. Please note the the result must be an json array like in the output tag. Do not modify the input the generated output will be the array inside the prefix array with additional classification property.

// <rules>
// Important: Emails that are personal or work-related and require immediate
//  attention.
// ● Promotions: Emails related to sales, discounts, and marketing campaigns.
//  ● Social: Emails from social networks, friends, and family.
//  ● Marketing: Emails related to marketing, newsletters, and notifications.
//  ● Spam:Unwanted or unsolicited emails.
//  ● General: If none of the above are matched, use General
// </rules>

// for example:
// <codePrefix>
//   [
// {
//  id: 1,
// snippet: "Hello Nithish, Below are the interesting opportunities based on your profile. Don&#39;t miss to apply on the below jobs for your next aspirational role. 31/05 - [PREMIUM]: Full Stack Engineer - Java/",
// "subject": "Masterclass: Build an Spotify Clone using React"
// }
// ]
// </codePrefix>
// <output>
//  [
//     {
//       id: 1,
//       snippet: "Hello Nithish, Below are the interesting opportunities based on your profile. Don&#39;t miss to apply on the below jobs for your next aspirational role. 31/05 - [PREMIUM]: Full Stack Engineer - Java/",
//       "subject": "Masterclass: Build an Spotify Clone using React",
//       classification: "Promotions",
//     }
// ]
// </output>
// `;
// const Emails = () => {
//   const [emails, setEmails] = useState<any>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [numberOfEmails, setNumberOfEmails] = useState<number>(5);
//   const { data: session } = useSession({
//     required: true,
//     onUnauthenticated() {
//       redirect("/");
//     },
//   });

//   useEffect(() => {
//     if (session && session?.accessToken && emails.length != numberOfEmails) {
//       fetchEmails(session?.accessToken, numberOfEmails);
//     }
//   }, [session, numberOfEmails]);

//   const renderEmailList = useMemo(() => {
//     return emails.map((mail: any, index: number) => (
//       <EmailList
//         key={index}
//         subject={mail.subject}
//         mailContent={mail.snippet}
//         label={mail.classification}
//       />
//     ));
//   }, [emails]);

//   const fetchEmails = useCallback(
//     async (token: string , emailToFetch: number) => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           `/api/emails?token=${token}&emailToFetch=${emailToFetch}`
//         );
//         const result = await response.json();
//         let emailData: Array<any> = [];
//         result.message.forEach((e: any) => {
//           emailData.push({
//             id: e.historyId,
//             snippet: e.snippet,
//             subject: e.subject
//           });
//         });
//         setEmails(emailData);
//         setLoading(false);
//       } catch (err) {
//         console.log("Error Fetcing Enails", err?.message);
//         setLoading(false);
//       }
//     },
//     []
//   );

//   const handleClassify = async () => {
//     try {
//       if (emails.length > 0) {
//         setLoading(true);
//         let prompt = PROMPT;
//         prompt += `
//           <codePrefix>
//             ${JSON.stringify(emails)}}
//           </codePrefix>
//         `;
//         const response = await fetch("/api/chat", {
//           method: "POST",
//           body: JSON.stringify({
//             apiKey: localStorage.getItem('API_KEY'),
//             prompt: prompt,
//           }),
//           redirect: "follow",
//         });
//         const res = await response.json();
//         if(res.status === 200){
//           let parseValue = JSON.parse(res.data);
//           setEmails(parseValue);
//           setLoading(false);
//         }else{
//           setLoading(false);
//           toast.error(res.message);
//         }
//       }
//     } catch (err) {
//       setLoading(false);
//       console.log("Error Fetching Openi", err?.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center flex-col w-[100%]">
//       {session && session.user && (
//         <div className="w-[50%] my-10">
//           <div>
//             <UserDetails
//               userName={session.user.name}
//               userEmail={session.user.email}
//               userImage={session?.user?.image}
//             />
//           </div>
//           <div>
//             <EmailActions
//               handleClassify={handleClassify}
//               setNumberOfEmails={setNumberOfEmails}
//             />
//           </div>
//           <div>
//             {loading ? (
//               <div>
//                 <SpinningLoader />
//               </div>
//             ) : (
//               renderEmailList
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default page;
  import React from 'react'
  
  const Emails = () => {
    return (
      <div>Emails</div>
    )
  }
  
  export default Emails
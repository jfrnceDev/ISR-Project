// import { getPaymentPage } from '@/services/api-services';
// import PaymentFlow from '@/components/payment/PaymentFlow';
// import { RichText } from '@/components/ui/RichText';

// // Enable ISR with revalidation time of 5 minutes
// export const revalidate = 300;

// export default async function PaymentPage() {
//   const paymentData = await getPaymentPage();
//   const paymentPage = paymentData.data;
  
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-3xl md:text-4xl font-bold mb-4">{paymentPage.title}</h1>
//         <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">{paymentPage.subtitle}</p>
        
//         <div className="mb-8">
//           <RichText content={paymentPage.description} />
//         </div>
        
//         <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-12">
//           <PaymentFlow 
//             providers={paymentPage.providerOptions} 
//             successTitle={paymentPage.successTitle} 
//             successMessage={paymentPage.successMessage} 
//             errorMessage={paymentPage.errorMessage}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
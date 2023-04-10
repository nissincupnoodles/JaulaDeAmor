import JaulaIcon from "../../public/JaulaIcon.png"
import Image from "next/image"
import Jaula3D from "../../public/Jaula3d.png"
import App1 from "../../public/Screenshot_20230410_164201.jpg"
import App2 from "../../public/Screenshot_20230410_164205.jpg"
import QR from "../../public/QR.svg"
import Head from "next/head"
export default function Home() {
  return (
     
    <main className="flex flex-col items-center p-4 sm:p-8 tablet:p-12">
      <Head>
        <title>Jaula De Amor</title>
        <link rel="icon" href='/JaulaIcon.png' />
      </Head>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <Image src={JaulaIcon} className="w-20 sm:w-32 mb-4 sm:mb-0" />
          <p className="font-bold text-4xl sm:text-6xl ml-4 sm:ml-8">Jaula De Amor</p>
        </div>
      </div>

      <div className="flex flex-col items-center lg:text-justify text-lg sm:text-xl mt-4 sm:mt-8">
        <p className="max-w-6xl text-justify sm:text-center">
          Jaula De Amor is a smart birdcage with a monitoring and management system for Agapornis Fischeri. The cage
          includes an automatic management function such as feeding system, treat giving system, cleaning system,
          lighting system and temperature normalization system. Jaula De Amor also include monitoring system where user
          can check the cage parameters such as temperature, humidity, food level, treat level and water level in the
          cage. The cage also has a live camera video that can be stream in the application software. All function of
          the cage is IOT (Internet of Things) based and can be control anywhere and anytime as long as the user has
          internet connection.
        </p>
        <Image src={Jaula3D} className="w-full mt-4 sm:mt-8" />
      </div>

      <div className="flex flex-col items-center sm:flex-row mt-20">
        <Image className="max-w-[300px] mb-4 sm:mb-0 sm:mr-8" src={App1} />
        <Image className="max-w-[300px] mb-4 sm:mb-0 sm:mr-8" src={App2} />

        <div className="flex flex-col items-center mt-4 sm:mt-0">
          <Image className="w-[200px] sm:w-[400px] mb-4" src={QR} />

          <div className="text-center">
            <p className="font-bold text-lg">To Install the Application</p>
            <p className="text-justify w-[200px] sm:w-[300px]">Scan the QR Code or you can just simply click the download button.</p>
          </div>

          <div className="text-center mt-4">
            <p className="font-bold text-lg">To Login in our app</p>
            <p className="text-justify w-[200px] sm:w-[300px]">Open the app and type the Cage ID to login also you can scan the QR Code that we put in the smart birdcage.</p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
  <p className="font-bold text-xl sm:text-xl">To control the cage you must try the following:</p>
  <ol className="list-disc list-inside mt-4 sm:text-lg max-w-lg text-justify sm:text-center">
    <li className="mb-2">Make sure that you download the application and install it.</li>
    <li className="mb-2">To login, scan the QR code in the cage or type the Cage ID to have an access on the dashboard.</li>
    <li className="mb-2">After a successful login, dashboard will appear you will see the 3 main menu in the app.</li>
    <li className="mb-2">In the food and treat section, you can set your desired time on when the food will dispense. You can also manually feed through the "Feed Now" button. A treat button for the treat reward system if you want to reward your lovebird. Another thing to see is the cage status of the cage.</li>
    <li className="mb-2">In the utility section, you can modify the fan on what operation will do in normalizing temperature. You can also manually open your full spectrum light and set the time the cleaning will activate.</li>
    <li className="mb-2">Camera section, you can monitor your bird or see what happens inside the cage.</li>
  </ol>
  
</div>
      </div>


    </main>
  )
}
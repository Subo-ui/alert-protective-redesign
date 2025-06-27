import { ArrowPathIcon, CalendarIcon, ChatBubbleBottomCenterTextIcon, CheckCircleIcon, PhoneIcon, UserGroupIcon, BuildingLibraryIcon, BriefcaseIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import chuckMishoulamImg from '../assets/images/chuck-mishoulam-memoriam-1.webp';
import ScrollFloat from '../components/ScrollFloat';


const credentials = [
  { name: 'Licensed by the State of Illinois', icon: CheckCircleIcon },
  { name: 'Licensed Electrical Contractor', icon: CheckCircleIcon },
  { name: 'Member of the Better Business Bureau', icon: BriefcaseIcon },
  { name: 'Member of Illinois Electronic Security Association', icon: UserGroupIcon },
  { name: 'Member of National Burglar and Fire Alarm Association', icon: BuildingLibraryIcon },
  { name: 'Fully Insured', icon: ShieldCheckIcon },
];

const benefits = [
    { name: 'Access us 24/7', icon: CalendarIcon },
    { name: 'Talk to a person in the area (no call forwarding)', icon: PhoneIcon },
    { name: 'Own your own system without long term agreements', icon: ArrowPathIcon },
    { name: 'Enjoy the security of a one year warranty on all our systems', icon: ChatBubbleBottomCenterTextIcon },
]

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* In Memoriam Section */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
                <div className="text-left">
                    <h2 className="font-serif text-4xl tracking-wider">IN MEMORIAM</h2>
                    <div className="mt-4">
                        <p className="text-2xl font-bold text-blue-400">CHARLES "CHUCK" MISHOULAM</p>
                        <p className="text-xl text-blue-400">1958 - 2021</p>
                    </div>
                    <div className="mt-8 border-t border-gray-700 pt-8">
                        <p className="text-lg leading-8 text-gray-300">
                            With great sadness, Alert Protective Services says goodbye to its Founder and guiding light, Chuck Mishoulam, who passed away after a brave battle with cancer. He was surrounded by his loving family, and as ever, was optimistic and upbeat to the very end.
                        </p>
                        <div className="mt-8 text-center">
                            <button className="bg-gray-200 text-black py-2 px-4 font-semibold hover:bg-white">
                                CONTINUE READING
                            </button>
                            {/* You can add the down arrow icon here if needed */}
                        </div>
                    </div>
                </div>
                <div className="self-end">
                    <img 
                        src={chuckMishoulamImg} 
                        alt="Charles 'Chuck' Mishoulam"
                        className="rounded-lg object-contain w-full h-auto max-h-[350px] mx-auto grayscale"
                    />
                </div>
            </div>
        </div>
    </section>

      {/* Main Content */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:max-w-none">
            {/* About Section */}
            <div className="text-center">
              <h2 className="text-base font-semibold leading-7 text-red-600">Our Story</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Alert Protective, Inc.</p>
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-4xl mx-auto">
                Alert Protective, Inc. was founded by Midwesterns in 1982. Since then, we have grown to become Midwest most trusted name in home and commercial security services and products. Our goal is to provide peace of mind to our clientele, whether they are seeking to provide safety for their families, businesses or possessions.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
                <div>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Commitment to the Community</h3>
                    <p className="mt-4 text-lg text-gray-600">
                        Unlike other security companies, our owners and employees live right here in the Midwest. It's our community, and we are dedicated to securing it. We pride ourselves on offering sophisticated security systems customized to each client's needs.
                    </p>
                    <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                        {credentials.map((credential, idx) => (
                            <ScrollFloat
                                key={credential.name}
                                animationDuration={1.2}
                                ease="back.out(1.7)"
                                y={60}
                                scale={true}
                                stagger={idx * 0.1}
                                className="flex items-start"
                            >
                                <div className="flex-shrink-0">
                                    <credential.icon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                </div>
                                <div className="ml-4">
                                    <dt className="text-base font-medium text-gray-900">{credential.name}</dt>
                                </div>
                            </ScrollFloat>
                        ))}
                    </dl>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                   {benefits.map((benefit, idx) => (
                       <ScrollFloat
                           key={benefit.name}
                           animationDuration={1.2}
                           ease="back.out(1.7)"
                           y={60}
                           scale={true}
                           stagger={idx * 0.1}
                           className="bg-gray-50 p-6 rounded-lg"
                       >
                           <benefit.icon className="h-8 w-8 text-red-600 mb-4"/>
                           <h4 className="text-lg font-semibold text-gray-900">{benefit.name}</h4>
                       </ScrollFloat>
                   ))}
                </div>
            </div>

            {/* 3/50 Project */}
            <div className="mt-24 bg-gray-50 rounded-2xl p-12">
                <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-2">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">The 3/50 Project</h3>
                         <p className="mt-4 text-lg text-gray-600">
                            As a fervent believer in supporting small businesses, Alert Security is a member of the 3/50 project.
                            If just half of the employed population spent $50 each month at locally owned businesses, it would generate $46.2 billion in revenue. For every $100 spent locally, $68 returns to the community. Let's keep our money at home. Shop locally like we do!
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-0 flex flex-col justify-center items-center text-center">
                        <div className="flex space-x-8">
                            <ScrollFloat
                                animationDuration={1.2}
                                ease="back.out(1.7)"
                                y={60}
                                scale={true}
                                stagger={0}
                            >
                                <div>
                                    <p className="text-5xl font-bold text-red-600">3</p>
                                    <p className="mt-2 text-lg font-medium text-gray-600">Think of 3 businesses you'd miss.</p>
                                </div>
                            </ScrollFloat>
                            <ScrollFloat
                                animationDuration={1.2}
                                ease="back.out(1.7)"
                                y={60}
                                scale={true}
                                stagger={0.1}
                            >
                                <div>
                                    <p className="text-5xl font-bold text-red-600">$50</p>
                                    <p className="mt-2 text-lg font-medium text-gray-600">Spend $50 a month locally.</p>
                                </div>
                            </ScrollFloat>
                        </div>
                    </div>
                </div>
            </div>

            {/* Awards Section */}
            <div className="mt-24 text-center">
                <ScrollFloat
                    animationDuration={1.2}
                    ease="power2.out"
                    y={40}
                    className="inline-block w-full"
                >
                    <h2 className="text-base font-semibold leading-7 text-red-600">Recognition</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Award-Winning Service</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
                        When you hire our security company, you are hiring an award-winning team with a reputation for honest, dependable work. We still believe integrity and a good day's work go a long way.
                    </p>
                    <div className="mt-10">
                        <img
                            className="mx-auto h-24"
                            src="/src/assets/images/sdmfeatured.pngw3.webp"
                            alt="Angie's List Super Service Award"
                        />
                        <p className="mt-4 font-semibold text-gray-900">Angie's List Super Service Award</p>
                        <p className="text-gray-600">Earned consecutively for the last decade plus, an honor less than 5% of companies receive.</p>
                    </div>
                </ScrollFloat>
            </div>

            {/* Social */}
            <div className="mt-24 border-t border-gray-200 pt-16 text-center">
                <p className="text-lg text-gray-600">
                    Feel free to <a href="/contact" className="font-semibold text-red-600 hover:text-red-500">contact us</a> or give us a call at <a href="tel:8554336700" className="font-semibold text-red-600 hover:text-red-500">(855) 433-6700</a> if you have any questions.
                </p>
                <p className="mt-4 text-lg text-gray-600">Follow us on social media for updates:</p>
                <div className="mt-6 flex justify-center space-x-6">
                    {[FaFacebook, FaTwitter, FaLinkedin].map((Icon, idx) => (
                        <ScrollFloat
                            key={idx}
                            animationDuration={1.2}
                            ease="back.out(1.7)"
                            y={40}
                            scale={true}
                            stagger={idx * 0.1}
                            className="inline-block"
                        >
                            <a href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">{Icon.displayName || 'Social'}</span>
                                <Icon className="h-6 w-6" />
                            </a>
                        </ScrollFloat>
                    ))}
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// Note: I've used FaFacebook, FaTwitter, FaLinkedin from react-icons. 
// You might need to install it: npm install react-icons
// Also, ShieldCheckIcon from heroicons/react/24/outline would be a good fit for "Fully Insured", but it needs to be imported. I'll add it in the next step. 
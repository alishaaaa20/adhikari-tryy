import Image from "next/image";
import React from "react";
import { Search, Filter } from "lucide-react";

export default function Page() {
  return (
    <div className="2xl:container mx-auto my-8 px-4">
      <img
        src="/login/login1.svg"
        alt="logo"
        className="absolute top-[-50px] right-0 mt-0 mr-0 w-[300px] md:w-[400px] lg:w-[400px] xl:w-[600px] z-0"
      />
      <div className="flex flex-col bg-white z-10 lg:flex-row md:flex-row items-center justify-between">
        <div className="rounded-lg p-4">
          <h1 className="text-4xl font-semibold">Well Wishes</h1>
        </div>
      </div>
      <div className="ml-4 rounded mt-6">
        <div className="flex relative items-center lg:items-start flex-col lg:flex-row">
          <div className="lg:sticky lg:top-20 text-center lg:text-left lg:ml-4">
            <div>
              <Image
                className="rounded-lg"
                src="/rajesh/hamal.svg"
                alt="literature collection"
                width={200}
                height={200}
              />
              <h2 className="text-xl lg:text-center font-semibold mt-4">
                Rajesh Hamal
              </h2>
              <p className="mb-8 lg:text-center">अध्यक्ष</p>
            </div>
          </div>
          <div className="leading-relaxed bg-white  w-full text-justify mt-4 lg:mt-0 lg:ml-8 lg:text-left text-lg">
            <p className="mb-4">
              क्रियाशीलता र रंगिनता भरपुर नेपाली संस्कृति र जीवन उत्सव। हाम्रो
              सामाजिक समृद्धता र सांस्कृतिक विविधतामा गहिरो नाटिकले फैलिएको छ।
              नेपाली लोकसंस्कृति अनेक रंग र स्वादमा समृद्ध छ, जुन सार्वजनिक र
              प्राइभेट अवस्थामा पाईन्छ। यसले हाम्रो समाजलाई अन्याय, समर्थन, र
              सामूहिकता भर्खरै प्रदान गर्दछ।
            </p>
            <p className="mb-4">
              नेपाली साहित्य, कला, संगीत, नृत्य, वस्त्र, र भोजनसमेत नेपालको
              सांस्कृतिक धरोहरको एक महत्त्वपूर्ण हिस्सा हुन्। त्यस्तो धेरै
              विविधताले हाम्रो देशलाई अनूठो र अत्यन्त प्रिय बनाएको छ। धार्मिक र
              सांस्कृतिक अवस्थामा, हाम्रो समाजले धेरै प्राचीन परंपराहरू आदर्श
              रुपमा बनाएको छ।
            </p>
            <p className="mb-4">
              नेपाली साहित्य र भाषा प्राय: हाम्रो भाषा, संस्कृतिक धारणा, र रहेका
              ऐतिहासिक घटनाहरूको विस्तृत प्रतिबिम्ब हो। यसले हाम्रो समुदायको
              संस्कृतिक गहिरोता, ज्ञान, र विचारलाई प्रकट गर्दछ।
            </p>
            <p>
              धेरै तालिकाहरू, रितुअनुसार उत्सव, उत्सव, तथा पर्वहरू भागी नेपालमा
              आयोजित हुन्छन्। यी आयोजनहरू नेपाली सांस्कृतिक परंपरा र धार्मिक
              उत्सवमा सहायक छन्। यसले नेपाली जीवनको निरन्तरता र समृद्धताको
              प्रतिष्ठा गर्दछ। प्रथम, नेपाली संस्कृतिको विविधता र समृद्धतामा
              संगीत, नृत्य, र कला जस्ता अनेक आदानप्रदानहरू भरिएका छन्। यसले
              नेपाली समुदायलाई समृद्ध भावना, सांस्कृतिक सहभागिता, र सामूहिक
              अभिवृद्धि साधन गर्दछ।
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end  mt-8 pr-4 space-y-2">
          <img src="/signature/sig.svg" width={150} alt="signature" />
          <div className="border-2 border-solid border-blue-700 w-[150px]"></div>

          <h1 className="text-center text-lg font-medium  w-[150px]">
            Signature
          </h1>
        </div>
      </div>
    </div>
  );
}

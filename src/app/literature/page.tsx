import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto px-8 py-16">
      <div className="flex flex-col  lg:flex-row mb-8 items-center lg:items-start justify-center lg:justify-start">
        <div className="text-center lg:sticky lg:top-20  lg:text-left lg:ml-8 ">
          <div className="float-left mr-4 mb-8">
            <img
              src="/rajesh/hamal.svg"
              alt="literature collection"
              className="rounded-full"
            />
          </div>
          <h1 className="text-3xl font-bold mt-6 mb-2 lg:text-center font-bold ">
            आशिष थापा
          </h1>
          <p className="text-gray-600 mb-0 mb-8 lg:text-center">2024-05-10</p>
        </div>
        <div className="w-full lg:w-[450px] leading-relaxed md:w-[400px] sm:w-[400px]  rounded lg:ml-0 leading-relaxed lg:ml-64 text-center text-lg shadow-lg rounded bg-white p-4">
          <p className="leading-relaxed">
            नेपालको मनमा, धरतीमा, इतिहासका कथाहरू विस्तारमा,
            <br />
            छायाँ गर्दछ जाति र परिवारको गाथा, <br /> एउटा बुनिएको लुगा, गहिरोमा
            बसेको।
          </p>
          <p className="mt-4">
            युगोंको सिरानोमा, जातिले राज्य गर्यो स्वायत्त, <br /> जीवनलाई आफ्नो
            रूपमा आकार दियो, <br /> तारारोपमा समयको चक्कर पर्खे, <br /> नयाँ
            कथाहरू आउँछन्, नयाँ सत्यहरू खुल्छन्।
          </p>
          <p className="mt-4">
            पहाड़बाट तराईसम्म, उत्तरदेखि दक्षिणसम्म, <br /> जातिको प्रभाव
            फैलिएको छ चारो तिर, <br /> तर उसको छायामा, उसको नजरमा, <br />{" "}
            परिवर्तनको आत्मा छ, सूर्यको ब्यान्डमा।
          </p>
          <p className="mt-4">
            क्योंकि नेपालको इतिहासको गहिरो भित्र, <br /> समृद्धताको खोजी,
            न्यायको निर्देशन। <br /> जातीय विविधतामा, एकतामा सहारा पाइ, <br />
            हरेक आत्मा, चाहे जाति भए वा नभए, <br /> मिल्छ एकता मा आत्म-विश्वास,
            मिल्छ शक्ति जब भए ।{" "}
          </p>
          <p className="mt-4">
            त्यसैले हाम्रो अत्ती, पुरानो गलियोमा, <br /> तालाबारी, भविष्यको
            खोजी, नयाँ श्रृंगार नै पाइ, <br /> किनकि नेपालको कथा, जातिले छायामा
            छ, <br /> तर एकतामा हाम्रो भविष्य रहेछ पनि यहाँ।
          </p>
        </div>
      </div>
    </div>
  );
}

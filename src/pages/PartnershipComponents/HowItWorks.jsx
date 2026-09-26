import React from 'react'

function HowItWorks() {
    const steps = [
        {
            id: 'STEP 01',
            title: 'Join as a Partner',
            description:
                'Sign up for the Zion Tech Hub Partnership Program, open to our alumni and top tech professionals.',
        },
        {
            id: 'STEP 02',
            title: 'Share Your Link',
            description:
                'Invite anyone in your network who could benefit from our programs. Share your unique referral link with them.',
        },
        {
            id: 'STEP 03',
            title: 'They Save, You Earn',
            description:
                'When they enroll, they get 10% off their course fee, and you receive 10% cash back on what they pay.',
        },
        {
            id: 'STEP 04',
            title: 'Keep Growing',
            description:
                "Every new referral adds to your earnings. There's no limit, the more you refer, the more you make.",
        },
    ]

    const benefits = [
        {
            value: '10%',
            title: 'Cash back for you',
            subtitle: 'on every referral',
        },
        {
            value: '10%',
            title: 'Course fee waiver',
            subtitle: 'for your referrals',
        },
        {
            value: '∞',
            title: 'No cap on how much',
            subtitle: 'you can earn',
        },
    ]

    return (
        <section className="w-full min-h-screen bg-[#034FE3]/10 px-4 sm:px-6 py-12 md:px-12">
            <div className="max-w-6xl mx-auto">
                {/* Existing sections */}
                <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-10">
                    How it works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="bg-white border border-[#034FE3]/50 rounded-3xl p-6 md:p-8 shadow-sm"
                        >
                            <p className="text-sm tracking-[0.2em] font-medium text-[#034FE3]/50 mb-4">
                                {step.id}
                            </p>

                            <h3 className="text-2xl font-semibold text-black mb-3">
                                {step.title}
                            </h3>

                            <p className="text-gray-500 text-base leading-8 max-w-2xl">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Existing CTA */}
                <div className="border-t border-[#e8e4d8] mt-20 pt-20 text-center">
                    <h2 className="text-4xl md:text-6xl font-semibold text-black mb-6 leading-tight">
                        Ready to become a Partner?
                    </h2>

                    <p className="text-gray-500 text-lg leading-9 max-w-2xl mx-auto mb-10">
                        Join a growing community of tech professionals building impact, and
                        income, by opening doors for others.
                    </p>

                    <button className="bg-[#034FE3] text-white px-10 py-5 rounded-2xl text-sm md:text-base font-semibold tracking-wide uppercase hover:opacity-90 transition">
                        Apply to Partner Program
                    </button>
                </div>

                {/* NEW SECTION (matches screenshot) */}
                <div className="mt-24 bg-white border border-[#e8e4d8] rounded-[2rem] p-8 md:p-12 text-center shadow-sm">
                    <div className="inline-block border border-[#034FE3] px-6 py-2 rounded-full mb-8">
                        <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-[#034FE3] font-medium">
                            Partnership Program
                        </p>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold leading-tight text-black mb-4">
                        Grow with us.
                        <br />
                        <span className="text-[#034FE3]">Earn as you go.</span>
                    </h2>

                    <p className="text-gray-500 text-lg leading-8 max-w-2xl mx-auto mb-12">
                        Invite talented people into the Zion Tech Hub community, and get
                        rewarded every time they join. It’s that simple.
                    </p>

                    <div className="border border-[#e8e4d8] rounded-3xl p-6 md:p-12 bg-[#fafaf7]">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="text-center border-b md:border-b-0 md:border-r last:border-r-0 last:border-b-0 border-[#e8e4d8] pb-8 md:pb-0 md:pr-6"
                                >
                                    <h3 className="text-5xl md:text-6xl font-bold text-[#034FE3] mb-3">
                                        {benefit.value}
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-8">
                                        {benefit.title}
                                        <br />
                                        {benefit.subtitle}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks

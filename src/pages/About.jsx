import React from 'react'

const About = () => {
  const team = [
    {
        avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
        name: "Martiana dialan",
        title: "Product designer",
    },
   
    {
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
        name: "Brown Luis",
        title: "Full stack engineer",
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/63.jpg",
        name: "Lysa sandiago",
        title: "Head of designers",
    },
    
    {
        avatar: "https://cdn.pixabay.com/photo/2023/06/10/18/09/business-8054608_1280.jpg",
        name: "Nilson kalin",
        title: "DevOp engineer",
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        name: "Tina watersone",
        title: "Brand designer",
    },
]
  return (
    <div className='min-h-[80vh] m-auto'><section className="pt-14 ">
    <div className="max-w-screen-xl mx-auto px-4 text-center md:px-8">
        <div className="max-w-xl mx-auto">
            <h3 className="text-orange-400 text-3xl font-montepasifico sm:text-4xl">
                Meet our team
            </h3>
            <p className="text-gray-600 mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy.
            </p>
        </div>
        <div className="mt-12 pt-12">
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {
                    team.map((item, idx) => (
                        <li key={idx}>
                            <div className="w-20 h-20 mx-auto">
                                <img
                                    src={item.avatar}
                                    className="w-full h-full rounded-full"
                                    alt=""
                                />
                            </div>
                            <div className="mt-2">
                                <h4 className="text-gray-700 font-montepasifico sm:text-lg">{item.name}</h4>
                                <p className="text-orange-400">{item.title}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
</section></div>
  )
}

export default About

import ToolInfoCard from '@/components/cards/ToolInfoCard'
import {devToolsData} from '@/lib/devToolsData'
import React from 'react'


export default function DevToolsGrid() {
    let data = devToolsData.data
    console.log(data);
    
  return (
    <section className="space-y-16 p-16 rounded-xl shadow-lg max-w-7xl mx-auto">
          {data.map(({ id, categoryTitle, tools }) => (
            <div key={id} className="group">
              <h2 className="text-4xl font-extrabold mb-6 pb-2 border-b-4 border-purple-600">
                <span className="text-transparent bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text">
                  {categoryTitle}
                </span>
              </h2>
              <div className="flex flex-wrap gap-8 justify-center sm:justify-start items-stretch">
                {tools.map(({ id, title, description, href, icon }) => (
                  <ToolInfoCard
                    key={id}
                    title={title}
                    description={description}
                    href={href}
                    icon={icon}
                    className="flex-1 max-w-[260px]"
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
  )
}

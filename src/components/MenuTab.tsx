import { ReactElement, useState } from 'react';

type TabProps = {
  tabs: ReactElement[];
};

function MenuTab({ tabs }: TabProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div className='flex items-center justify-center'>
        {tabs.map((_, i) => (
          <div
            key={i}
            className={activeTab === i ? 'tab active' : 'tab'}
            onClick={() => setActiveTab(i)}
          >
            Tab {i + 1}
          </div>
        ))}
      </div>

      <div className='mx-auto'>{tabs.at(activeTab)}</div>
    </>
  );
}

export default MenuTab;

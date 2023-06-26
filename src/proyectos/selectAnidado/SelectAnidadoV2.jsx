import React, { useState, useEffect } from 'react';

const NestedSelect = () => {
  const [selectedValues, setSelectedValues] = useState({
    level1: '',
    level2: '',
    level3: ''
  });

  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulación de carga de datos desde una API
    const fetchData = async () => {
      const response = await fetch('URL_DE_TU_API');
      const jsonData = await response.json();
      setData(jsonData);
    };

    fetchData();
  }, []);

  const handleSelection = (level, value) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [level]: value
    }));
  };

  const handleKeyDown = (event, level, value) => {
    if (event.key === 'Enter') {
      handleSelection(level, value);
    }
  };

  return (
    <div>
      <div>
        <label>Level 1:</label>
        <ul>
          {data?.level1.map((item) => (
            <li
              key={item.id}
              className={selectedValues.level1 === item.id ? 'selected' : ''}
              onClick={() => handleSelection('level1', item.id)}
              onKeyDown={(event) => handleKeyDown(event, 'level1', item.id)}
              tabIndex={0}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {selectedValues.level1 && (
        <div>
          <label>Level 2:</label>
          <ul>
            {data?.level2[selectedValues.level1].map((item) => (
              <li
                key={item.id}
                className={selectedValues.level2 === item.id ? 'selected' : ''}
                onClick={() => handleSelection('level2', item.id)}
                onKeyDown={(event) => handleKeyDown(event, 'level2', item.id)}
                tabIndex={0}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedValues.level2 && (
        <div>
          <label>Level 3:</label>
          <ul>
            {data?.level3[selectedValues.level2].map((item) => (
              <li
                key={item.id}
                className={selectedValues.level3 === item.id ? 'selected' : ''}
                onClick={() => handleSelection('level3', item.id)}
                onKeyDown={(event) => handleKeyDown(event, 'level3', item.id)}
                tabIndex={0}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NestedSelect;

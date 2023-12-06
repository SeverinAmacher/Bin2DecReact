import convert from './convert.svg'
import { useState } from 'react';

export function Bin2dec() {
    const [binaryValue, setBinaryValue] = useState("");
    const [decimalValue, setDecimalValue] = useState("");

    const handleChange = event => {
        setBinaryValue(event.target.value);
    };

    const onConvert = event => {
        let decimalResult = 0;
        for (let i = 0; i < binaryValue.length; i++) {
            if (binaryValue[i] === '1') {
                decimalResult += (2 ** i);
            }
        }
        setDecimalValue(decimalResult);
    }
    
    return (
      <div className="flex gap-2 justify-between">
        <div>
            <label for="binary" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="binary" regex="(0, 1)*" onChange={handleChange} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="00000001" required />
        </div>
        <div className="p-4">
            <button className="rounded-none bg-indigo-500 shadow-xl h-8 w-8 p-1" type="button" onClick={onConvert}>
                <img src={convert} alt="convert" title="convert" />
            </button>
        </div>
        <div>
            <label for="decimal" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Decimal output</label>
            <input type="text" value={decimalValue} id="decimal" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly />
        </div>
      </div>
    );
  }
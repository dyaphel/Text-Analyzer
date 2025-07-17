import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
const buttonBaseClasses = "text-white px-5 py-2.5 rounded-xl flex items-center transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 shadow-md";

const LetterFrequency = ({ text, showResult }) => {
  const analyzeLetterFrequency = () => {
    if (!text.trim()) {
      showResult('Letter Frequency', 'Please enter some text to analyze.');
      return;
    }

    const frequency = {};
    const lowerText = text.toLowerCase();
    
    // Count letters (a-z only)
    for (const char of lowerText) {
      if (/[a-z]/.test(char)) {
        frequency[char] = (frequency[char] || 0) + 1;
      }
    }

    // Convert to array and sort alphabetically
    const letters = Object.keys(frequency).sort();
    const counts = letters.map(letter => frequency[letter]);

    // Prepare chart data
    const chartData = {
      labels: letters,
      datasets: [
        {
          label: 'Letter Frequency',
          data: counts,
          backgroundColor: 'rgba(79, 70, 229, 0.7)',
          borderColor: 'rgba(79, 70, 229, 1)',
          borderWidth: 1,
        },
      ],
    };

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Letter Frequency Distribution',
          font: {
            size: 16,
            weight: '500',
          },
           color: '#000000ff', // equivalente a text-gray-800
            padding: {
                top: 10,
                bottom: 20
            }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${context.parsed.y} occurrences`;
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Count',
            font: {
              weight: 'bold'
            }
          },
          ticks: {
            stepSize: 1
          }
        },
        x: {
          title: {
            display: true,
            text: 'Letters',
            font: {
              weight: 'bold'
            },
            },
            ticks: {
            stepSize: 1
          }
        },
      },
    };

    const chartComponent = (
      <div className="space-y-4">
        <div style={{ height: '300px' }}>
          <Bar data={chartData} options={chartOptions} />
        </div>
        <p className="text-indigo-600 font-semibold">
          Total letters analyzed: <span className=" text-gray-800 font-semibold">{text.replace(/[^a-z]/gi, '').length}</span>
        </p>
        <p className="text-indigo-600 font-semibold">
          Unique letters found: <span className="text-gray-800 font-semibold">{letters.length}</span>
        </p>
      </div>
    );

    showResult('Letter Frequency', chartComponent, false);
  };

  return (
    <button
      onClick={analyzeLetterFrequency}
      className={`${buttonBaseClasses} bg-white hover:bg-gray-100 border border-gray-200`}
    >
     <span className="text-gray-800 font-medium">
         <i className="fas fa-chart-bar width mr-2 text-indigo-600"></i> Letter Frequency
      </span>
    </button>
  );
};

export default LetterFrequency;
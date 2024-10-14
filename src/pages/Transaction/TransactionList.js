import React, { useState, useEffect, useRef } from 'react';
import './TransactionList.css'; // Ensure this file exists with the CSS provided earlier

const TransactionList = () => {
    // State variables
    const [filter, setFilter] = useState('All'); // Initialize to 'All' to show all transactions
    const [customStart, setCustomStart] = useState(''); // Custom start date
    const [customEnd, setCustomEnd] = useState(''); // Custom end date
    const [filteredTransactions, setFilteredTransactions] = useState([]); // Transactions to display
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown visibility

    const dropdownRef = useRef(null);

    // Sample transactions data
    const transactions = [
        { id: 1, date: '2024-10-14', amount: 100 },
        { id: 2, date: '2024-10-13', amount: 50 },
        { id: 3, date: '2024-10-10', amount: 20 },
        { id: 4, date: '2024-09-30', amount: 30 },
        { id: 5, date: '2024-09-05', amount: 75 },
        { id: 6, date: '2024-08-15', amount: 60 },
        { id: 7, date: '2024-07-20', amount: 90 },
        // Add more transactions as needed
    ];

    // Function to calculate date range based on filter type
    const getDateRange = (type, customStartDate, customEndDate) => {
        const today = new Date();
        const start = new Date();
        const end = new Date();

        switch (type) {
            case 'All':
                // Set start and end to encompass all possible dates
                start.setFullYear(0, 0, 1); // January 1, Year 0
                end.setFullYear(9999, 11, 31); // December 31, Year 9999
                break;
            case 'Today':
                start.setHours(0, 0, 0, 0);
                end.setHours(23, 59, 59, 999);
                break;
            case 'Yesterday':
                start.setDate(today.getDate() - 1);
                end.setDate(today.getDate() - 1);
                start.setHours(0, 0, 0, 0);
                end.setHours(23, 59, 59, 999);
                break;
            case 'Last 7 Days':
                start.setDate(today.getDate() - 7);
                break;
            case 'Last 30 Days':
                start.setDate(today.getDate() - 30);
                break;
            case 'This Month':
                start.setDate(1);
                break;
            case 'Last Month':
                start.setMonth(today.getMonth() - 1);
                start.setDate(1);
                end.setMonth(today.getMonth() - 1);
                end.setDate(new Date(today.getFullYear(), today.getMonth(), 0).getDate());
                break;
            case 'Custom':
                if (customStartDate && customEndDate) {
                    start.setTime(new Date(customStartDate).setHours(0, 0, 0, 0));
                    end.setTime(new Date(customEndDate).setHours(23, 59, 59, 999));
                } else {
                    // If custom dates are not set, default to show all
                    start.setFullYear(0, 0, 1);
                    end.setFullYear(9999, 11, 31);
                }
                break;
            default:
                // Default to show all transactions
                start.setFullYear(0, 0, 1);
                end.setFullYear(9999, 11, 31);
                break;
        }

        return { start, end };
    };

    // Function to filter transactions based on current filter
    const filterTransactions = () => {
        const { start, end } = getDateRange(filter, customStart, customEnd);

        const filtered = transactions.filter((transaction) => {
            const transactionDate = new Date(transaction.date);
            return transactionDate >= start && transactionDate <= end;
        });

        setFilteredTransactions(filtered);
    };

    // Effect hook to filter transactions whenever filter criteria change
    useEffect(() => {
        filterTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter, customStart, customEnd]);

    // Effect hook to handle clicks outside the dropdown to close it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    // Handler for changing the filter
    const handleFilterChange = (selectedFilter) => {
        setFilter(selectedFilter);
        // Reset custom dates if not selecting 'Custom'
        if (selectedFilter !== 'Custom') {
            setCustomStart('');
            setCustomEnd('');
        }
        // Close the dropdown after selecting an option
        setIsDropdownOpen(false);
    };

    // Handler for toggling the dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen((prevState) => !prevState);
    };

    return (
        <div className="container">
            <h2>Transaction List</h2>

            <div className="filter-section">
                {/* Dropdown for selecting filter */}
                <div className="dropdown" ref={dropdownRef}>
                    <button
                        className="dropdown-toggle"
                        type="button"
                        onClick={toggleDropdown}
                    >
                        Sort by: {filter} <span className="arrow">{isDropdownOpen ? '▲' : '▼'}</span>
                    </button>
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            <button
                                className="dropdown-item"
                                onClick={() => handleFilterChange('All')}
                            >
                                All
                            </button>
                            <button
                                className="dropdown-item"
                                onClick={() => handleFilterChange('Today')}
                            >
                                Today
                            </button>
                            <button
                                className="dropdown-item"
                                onClick={() => handleFilterChange('Yesterday')}
                            >
                                Yesterday
                            </button>
                            <button
                                className="dropdown-item"
                                onClick={() => handleFilterChange('Last 7 Days')}
                            >
                                Last 7 Days
                            </button>
                            <button
                                className="dropdown-item"
                                onClick={() => handleFilterChange('Last 30 Days')}
                            >
                                Last 30 Days
                            </button>
                            <button
                                className="dropdown-item"
                                onClick={() => handleFilterChange('This Month')}
                            >
                                This Month
                            </button>
                            <button
                                className="dropdown-item"
                                onClick={() => handleFilterChange('Last Month')}
                            >
                                Last Month
                            </button>
                            <button
                                className="dropdown-item"
                                onClick={() => handleFilterChange('Custom')}
                            >
                                Custom Range
                            </button>
                        </div>
                    )}
                </div>

                {/* Custom date picker shown only when 'Custom Range' is selected */}
                {filter === 'Custom' && (
                    <div className="custom-date-picker">
                        <label>
                            Start Date:
                            <input
                                type="date"
                                value={customStart}
                                onChange={(e) => setCustomStart(e.target.value)}
                            />
                        </label>
                        <label>
                            End Date:
                            <input
                                type="date"
                                value={customEnd}
                                onChange={(e) => setCustomEnd(e.target.value)}
                            />
                        </label>
                    </div>
                )}
            </div>

            {/* Transaction List */}
            <ul className="transaction-list">
                {filteredTransactions.length > 0 ? (
                    filteredTransactions.map((transaction) => (
                        <li key={transaction.id}>
                            <strong>ID:</strong> {transaction.id} |{' '}
                            <strong>Amount:</strong> ${transaction.amount} |{' '}
                            <strong>Date:</strong> {transaction.date}
                        </li>
                    ))
                ) : (
                    <li>No transactions found for the selected period.</li>
                )}
            </ul>
        </div>
    );
};

export default TransactionList;

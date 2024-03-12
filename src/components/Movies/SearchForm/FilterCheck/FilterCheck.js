export default function FilterCheck({shortFilterState}) {

    const [isChecked, setIsChecked] = shortFilterState;

    function toggleFilterShort() {
        setIsChecked(!isChecked);
    }

    return (
        <div className="filter-container">
            <label className="switch">
                <input className="switch__checkbox"
                       type="checkbox"
                       onChange={toggleFilterShort}
                       checked={isChecked}/>
                <span className="switch__slider"></span>

            </label>
            <p className="switch-label">Короткометражки</p>
        </div>
    )
};
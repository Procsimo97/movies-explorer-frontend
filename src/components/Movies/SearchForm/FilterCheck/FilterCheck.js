export default function FilterCheck() {
    return (
        <div className="filter-container">
            <label className="switch">
                <input className="switch__checkbox" type="checkbox" />
                <span className="switch__slider"></span>

            </label>
            <p className="switch-label">Короткометражки</p>
        </div>
    )
};
import Slider from '@mui/material/Slider';

export default function SliderPrice({ value, onChange }: { value: number[]; onChange: (val: number[]) => void }) {
    const handleChange = (event: Event, newValue: number | number[]) => {
        onChange(newValue as number[]);
    };

    return (
        <div className="slider-price w-80">
            <p>Pris-interval</p>
            <Slider
                value={value}
                min={0}
                max={12000000}
                step={100000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                sx={{
                    color: '#1976d2',
                    '& .MuiSlider-thumb': {
                        backgroundColor: '#C4C4C4',
                        border: '2px solid #C4C4C4',
                        boxShadow: 'none', // No shadow by default
                        '&:hover': {
                            boxShadow: '0 0 0 8px rgba(25, 118, 210, 0.16)', // Show shadow on hover
                        },
                        '&.Mui-active': {
                            boxShadow: '0 0 0 14px rgba(25, 118, 210, 0.16)', // Show shadow while dragging
                        },
                    },
                    '& .MuiSlider-track': {
                        backgroundColor: '#434343',
                        height: 3, // Make the track thinner
                    },
                    '& .MuiSlider-rail': {
                        backgroundColor: '#e0e0e0',
                        height: 4, // Make the rail thinner
                    },
                }}
            />
            <div className="flex justify-between mt-2 text-sm">
                <span>{value[0].toLocaleString('da-DK')} kr.</span>
                <span>{value[1].toLocaleString('da-DK')} kr.</span>
            </div>
        </div>
    );
}
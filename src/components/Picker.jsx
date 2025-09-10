import { useSnapshot } from "valtio"
import { HexColorPicker } from 'react-colorful'
import state from "../utils/state";


const Picker = () => {

  const snap = useSnapshot(state);

  if (!snap.current) return null;

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-4 rounded-xl shadow-lg">
      <HexColorPicker
        className="picker"
        color={snap.items[snap.current]}
        onChange={(color) => (state.items[snap.current] = color)}
      />
      <h1 className="mt-3 text-black font-semibold text-center">
        {snap.current}
      </h1>
    </div>
  )
}

export default Picker
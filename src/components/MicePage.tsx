import { useLocale } from "~/hooks/useLocale";

function MicePage() {
  const { _ } = useLocale();
  return <div>Mice</div>;
}
export { MicePage };
/*
  const [mice, setMice] = useMice();
  const [currentMouseIndex, setCurrentMouseIndex] = useState(-1);
  const [currentMouse, setCurrentMouse] = useState<Mouse | null>(null);

  useEffect(() => {
    if (currentMouseIndex > -1) {
      setCurrentMouse(mice[currentMouseIndex]);
    }
  }, [currentMouseIndex]);

  useEffect(() => {
    if (currentMouseIndex === -1 && mice.length > 0) {
      setCurrentMouseIndex(0);
    }
  }, [mice]);

  const addMouse = () => {
    const name = prompt(_("mouse.name"));

    if (!name) {
      return;
    }

    setMice((mice: Mouse[]) => [...mice, createMouse(name)]);
    setCurrentMouseIndex(mice.length);
  };

  const selectMouse = (mouseIndex: number) => () => {
    setCurrentMouseIndex(mouseIndex);
  };

      <nav>
        <ul>
          {mice.map((mouse, index) => (
            <li>
              <a href="#" onClick={selectMouse(index)}>
                {mouse.name}
              </a>
            </li>
          ))}
        </ul>
        <Button onClick={addMouse}>{_("btn.add_mouse")}</Button>
      </nav>

      {currentMouse ? (
        <main>
          <h2>{currentMouse.name}</h2>

          <h3>{_("mouse.profile")}</h3>
          <table class="mouse-stats">
            <tbody>
              <tr>
                <th>{_("mouse.str")}</th>
                <td>{currentMouse.strength}</td>
                <td>{currentMouse.maxStrength}</td>
              </tr>
              <tr>
                <th>{_("mouse.dex")}</th>
                <td>{currentMouse.dexterity}</td>
                <td>{currentMouse.maxDexterity}</td>
              </tr>
              <tr>
                <th>{_("mouse.wis")}</th>
                <td>{currentMouse.wisdom}</td>
                <td>{currentMouse.maxWisdom}</td>
              </tr>
              <tr>
                <th>{_("mouse.hp")}</th>
                <td>{currentMouse.hp}</td>
                <td>{currentMouse.maxHp}</td>
              </tr>
            </tbody>
          </table>

          <h3>{_("mouse.inventory")}</h3>

          <a href="#">{_("action.deleteMouse", currentMouse.name)}</a>
        </main>
      ) : null}

      -----

type Mouse = {
  name: string;
  level: number;
  xp: number;
  strength: number;
  maxStrength: number;
  dexterity: number;
  maxDexterity: number;
  wisdom: number;
  maxWisdom: number;
  hp: number;
  maxHp: number;
};

type Item = {
  name: string;
  description: string;
  pictureUrl: string;
  uses: number;
  maxUses: number;
};

const createMouse = (name: string): Mouse => {
  return {
    name,
    level: 0,
    xp: 0,
    strength: 0,
    maxStrength: 0,
    dexterity: 0,
    maxDexterity: 0,
    wisdom: 0,
    maxWisdom: 0,
    hp: 0,
    maxHp: 0,
  };
};

const loadMice = () => {
  return JSON.parse(localStorage.getItem("mice") || "[]");
};

const saveMice = (mice: Mouse[]) => {
  localStorage.setItem("mice", JSON.stringify(mice));
};

const useMice = () => {
  const [mice, _setMice] = useState<Mouse[]>(loadMice());

  const setMice = (updater: (mice: Mouse[]) => Mouse[]) => {
    _setMice((mice: Mouse[]) => {
      const newMice = updater(mice);
      saveMice(newMice);
      return newMice;
    });
  };

  return [mice, setMice] as const;
};
*/

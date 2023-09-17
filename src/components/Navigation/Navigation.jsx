import { StyledLink } from "../SharedLayout/SharedLayout.styled";
import { StyledWrap } from "./Navigation.styled";



export const Navigation = () => {

    // const [lang, setLang] = useState(langUA)
    // const language = useSelector(getLang)
   
    // Language
    // useEffect(() => {
    //   setLang(language === 'english' ?  langEN :  langUA);
    // }, [language])

    return (
      <StyledWrap >
        <StyledLink  to="/">
        Home
        </StyledLink>
        <StyledLink  to="/catalogue">
        Catalogue
        </StyledLink>

      </StyledWrap>
    );
  };
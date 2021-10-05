import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ApiEstadoUsuarios } from "../../js/api/global/estadousuario";
import { ApiNacionalidades } from "../../js/api/global/nacionalidades";
import {
    GlobalInit,
    GlobalIniting,
} from "../../js/redux/actions/globalActions";
import { useAppSelector } from "../../js/redux/store/store";

const Home = () => {
    const dispatch = useDispatch();

    const { loading, nacionalidades, estadoUsuarios } = useAppSelector(
        (state) => state.global
    );

    const LoadData = (): void => {
        dispatch(GlobalIniting());

        Promise.all([ApiNacionalidades.Get(), ApiEstadoUsuarios.Get()]).then(
            (results) => {
                const nacionalidadesResult = results[0];
                const estadoUsuariosResult = results[1];
                if (
                    nacionalidadesResult.status === 200 &&
                    estadoUsuariosResult.status === 200
                ) {
                    const initData = {
                        nacionalidades: nacionalidadesResult.data,
                        estadoUsuarios: estadoUsuariosResult.data,
                    };
                    dispatch(GlobalInit(initData));
                }
            }
        );
    };

    useEffect(() => {
        LoadData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) return <>Cargando...</>;

    return (
        <div>
            <select name="nacionalidades" id="nacionalidades">
                {nacionalidades?.map((n) => (
                    <option value={n.id} key={n.id}>
                        {n.isonac} - {n.descripcion}
                    </option>
                ))}
            </select>

            <select name="nacionalidades" id="nacionalidades">
                {estadoUsuarios?.map((n) => (
                    <option value={n.id} key={n.id}>
                        {n.descripcion}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Home;

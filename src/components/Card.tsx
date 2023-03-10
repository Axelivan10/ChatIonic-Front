export interface CardPropiedades{
    titulo: string
    subtitulo?: string
    contenido: string
    onPress: () => void
}

export default function Card(props: CardPropiedades): JSX.Element{
    return(
        <>
            <div className="card">
                <span>{props.titulo}</span>
                <span>{props.subtitulo}</span>
                <button onClick={props.onPress}>presionar</button>
            </div>
        </>
    )
}
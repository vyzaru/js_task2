import React, {useEffect, useState, useRef} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
export  const Layout = ( {children} ) => {

    const [number, setNumber] = useState(0)

    const increment = () => {
        //let _nubmer = number
        setNumber(number + 1)
    }
    // useEffect(() => {
    //     return(() => {
    //         alert('Component mount')
    //     })
    // }, [number])

    const textareaRef = useRef()

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '768px',
            justifyContent: 'space-between'
          }}>
            <Header/>
            <textarea ref = {textareaRef}  ></textarea>
            <input type='button' value={'Increment'} onClick={() => increment()} /> :{number}
            <input type='button' value={'Get textarea value'} onClick={() => console.log('ref', textareaRef.current.value)} />
            <LayoutClass/>
            {children}
            <Footer/>
        </div>
    );
}


class LayoutClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            number: 0
        }
    }

    componentDidMount(){
        //появление компонента
    }
    componentDidUpdate(){
        //обновление состояний компонента
    }
    componentWillUnmount(){
        // Размонтирование компонента
    }

    render() {
        const { number } = this.state
        return (
            <div>
                <p>class component</p>
                <p>state number: {number}</p>
                <input type='button' value='incr' onClick={() => this.setState({ number: number + 1 })}/>
            </div>
        );
    }
}

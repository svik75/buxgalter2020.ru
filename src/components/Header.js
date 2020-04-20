import React, { Component } from 'react';
const myStyle = {'position': 'relative', 'zIndex': 0};

class Header extends Component {

    render() {
        return (
            <header style={myStyle}>
                <h1>Мы заменим штат бухгалтеров, сформируем и сдадим любые отчеты НКО, ООО, ИП</h1>
                <p>Бухгалтерский учет и отчетность не проблема когда этим занимаются профессионалы. Доверьте бухгалтерский и налоговый учет в надежные руки.</p>
            </header>
        )
    }

}

export default Header;
import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Header from './Header.jsx';
import MessageField from './MessageField.jsx';
import ChatList from './ChatList.jsx';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.string
    };

    render() {
        const { chatId } = this.props;

        return (
            <Container className="layout-main">
                <Header chatId={chatId} />
                <div className="chatarea">
                    <ChatList chatId={chatId} />
                    <MessageField chatId={chatId} />
                </div>
            </Container>
        );
    }
}


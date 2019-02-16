import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Settings from './components/Settings';
import Filter from './components/Filter';
import Image from './components/Image';
import FilterList from './components/FilterList';

class App extends Component {
    state = {
        image: 'http://s1.picswalls.com/wallpapers/2016/06/10/free-4k-wallpaper_065238651_309.jpg',
        selectedFilter: '',
        settings: {
            contrast: 100,
            hue: 0,
            brightness: 100,
            saturate: 100,
            sepia: 0
        }
    };

    handleChange = event => {
        const setting = event.target.id;
        const value = event.target.value;
        const settings = { ...this.state.settings, [setting]: value };

        this.setState({ selectedFilter: '', settings });
    };

    updateSettings = (selectedFilter, settings) => {
        this.setState({ selectedFilter, settings });
    };

    getUrl=(e)=>{
        e.preventDefault();
        this.setState({
            image:e.target.elements.image.value
        });
    };

    resetSettings=()=>{
        this.setState({
            settings: {
                contrast: 100,
                hue: 0,
                brightness: 100,
                saturate: 100,
                sepia: 0
            }
        })
    };

    getFile= ()=>{
        let formInput = document.getElementById('file');
        let fr = new FileReader();
        let string;

        fr.readAsDataURL(formInput.files[0]);
        fr.onloadend = async (e)=>{
            string = await e.target.result;
            this.setState({
                image:string
            })
        };
    };



    render() {
        const { image, selectedFilter, settings } = this.state;

        return (
            <div className="app">
                <Header title="Reactagram" />

                <section className="content">
                    <Settings settings={settings} getFile={this.getFile} resetSettings={this.resetSettings} getUrl={this.getUrl} handleChange={this.handleChange} image={image} />

                    <main className="main">
                        <Filter settings={settings}>
                            <Image src={this.state.image}/>
                        </Filter>

                        <FilterList
                            image={image}
                            settings={settings}
                            selectedFilter={selectedFilter}
                            updateSettings={this.updateSettings}
                        />
                    </main>
                </section>
            </div>
        );
    }
}

export default App;
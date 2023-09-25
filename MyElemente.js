class MiComponente extends HTMLElement {

constructor(){
	super();
	this.innerHTML = '<p2012</p>';
}
}
customElements.define("team-e",MiComponente);

import { LightningElement } from 'lwc';

export default class ConditionalDirectives extends LightningElement {
    isVisible = false;
    pictureUrl = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/05935ada-bf8b-4927-83dc-c6c0f055fe6d/d4xgcri-88814932-62ee-419e-8a49-b423df463308.jpg/v1/fit/w_800,h_640,q_70,strp/sshhh___pikachu_s_sleeping__by_chibiartist99_d4xgcri-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvMDU5MzVhZGEtYmY4Yi00OTI3LTgzZGMtYzZjMGYwNTVmZTZkXC9kNHhnY3JpLTg4ODE0OTMyLTYyZWUtNDE5ZS04YTQ5LWI0MjNkZjQ2MzMwOC5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2AvaWPG5b6aplQMQV70lRjoFfOQ_GuSCMWMeC-UqF6k';
    handleChange(event) {
        this.isVisible = event.target.checked;
    }
}
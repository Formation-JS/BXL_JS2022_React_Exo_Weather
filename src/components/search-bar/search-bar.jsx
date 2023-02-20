import PropTypes from 'prop-types';
import { useId } from 'react';
import { useForm } from 'react-hook-form';
import style from './search-bar.module.css';

const SearchBar = ({ label, placeholder, submitText, onSearch }) => {

    // Un identifiant unique pour le formulaire
    const id = useId();

    // Utilisation de "React Hook form" pour gérer le formulaire
    const { register, handleSubmit, reset, setFocus  } = useForm({
        defaultValues: {
            search: ''
        }
    });

    // Réaction au submit du formulaire
    const handleSearch = ({search}) => {
        // Envoi des données au composent parent
        onSearch(search);

        // Reset du formulaire et focus sur l'input
        setFocus('search');
        reset();
    }

    // Render
    return (
        <form onSubmit={handleSubmit(handleSearch)} className={style['form']}>
            {label.trim() !== '' && (
                <label htmlFor={id + 'search'}>{label}</label>
            )}
            <input type='text' id={id + 'search'}
                placeholder={placeholder}
                {...register('search', { required: true })} />
            <button type='submit'>{submitText}</button>
        </form>
    );
};

SearchBar.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    submitText: PropTypes.string,
    onSearch: PropTypes.func
};

SearchBar.defaultProps = {
    label: '',
    placeholder: '',
    submitText: 'Rechercher',
    onSearch: () => {} // Noop
};

export default SearchBar;
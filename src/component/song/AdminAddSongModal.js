import React from 'react';
import '../../App.css';

const AdminAddSongModal = () => {
  return (
    <div class='admin-song-modal '>
      <div
        id='add-song-modal'
        class='modal'
        style={{ width: '60%', height: '80em' }}
      >
        <div class='modal-content '>
          <h4>Ajoute Un Chant</h4>
          <div className='admin-edit'>
            <form class='col s10'>
              <div class='row'>
                <div class='input-field col s6'>
                  <input id='author' type='text' class='validate' />
                  <label
                    for='author'
                    className='blue-text darken-3 label'
                    id='label'
                  >
                    Author
                  </label>
                </div>
                <div class='input-field col s6'>
                  <input id='title' type='text' class='validate' />
                  <label for='title' className='blue-text lighten-3' id='label'>
                    Titre
                  </label>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s12'>
                  <input id='mass' type='text' class='validate' />
                  <label for='mass' className='blue-text lighten-3' id='label'>
                    Messe
                  </label>
                </div>
              </div>
              <div class='row'>
                <div class='input-field col s6'>
                  <input id='liturgy' type='text' class='validate' />
                  <label
                    for='liturgy'
                    className='blue-text lighten-3'
                    id='label'
                  >
                    Liturgy
                  </label>
                </div>
                <div class='input-field col s6'>
                  <input id='role' type='text' class='validate' />
                  <label for='role' className='blue-text lighten-3' id='label'>
                    Role
                  </label>
                </div>
              </div>
              <div className='row'>
                <div class='input-field col s12'>
                  <input id='type' type='text' class='validate' />
                  <label className='blue-text lighten-3' for='type ' id='label'>
                    Type
                  </label>
                </div>
              </div>

              <div class='row'>
                <div class='input-field col s12'>
                  <textarea id='lyrics' class='materialize-textarea'></textarea>
                  <label for='lyrics' className='blue-text lighten-3'>
                    Parole
                  </label>
                </div>
              </div>
              <button
                class='btn waves-effect waves-light add-admin-song '
                type='submit'
                name='action'
              >
                Ajouter Chants
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddSongModal;

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localStorageKey = 'lsitaTareas';
  


  getTareas():string[]{
    if (typeof window !== 'undefined' && window.localStorage) {
      const tareas = localStorage.getItem('tareas');
      return tareas ? JSON.parse(tareas) : [];
    } else {
      console.warn('localStorage is not available');
      return [];
    }
  }

  agregarTarea(tarea: string) {
    const tareas = this.getTareas();
    tareas.push(tarea);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('tareas', JSON.stringify(tareas));
    }
  }

  eliminarTarea(index: number) {
    const tareas = this.getTareas();
    tareas.splice(index, 1);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('tareas', JSON.stringify(tareas));
    }
  }
  
}

package med.voll.api.controller;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import med.voll.api.exceptions.ResourceNotFoundException;
import med.voll.api.medico.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/medicos")
public class MedicoController {

    @Autowired
    private MedicoRepository repository;

    @PostMapping
    @org.springframework.transaction.annotation.Transactional
    public void cadastrar(@RequestBody @Valid DadosCadastroMedico dados) {
        repository.save(new Medico(dados));
    }

    @GetMapping("/{id}")
    public DadosListagemMedico buscarPorId(@PathVariable Long id) {
        Medico medico = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Médico não encontrado com o ID: " + id));
        return new DadosListagemMedico(medico);
    }


    @GetMapping
    public Page<DadosListagemMedico> listar(@PageableDefault(size = 10, sort = {"nome"}) Pageable paginacao) {
        return repository.findAll(paginacao).map(DadosListagemMedico::new);
    }

    @PutMapping
    @org.springframework.transaction.annotation.Transactional
    public void atualizar(@RequestBody @Valid DadosAtualizacaoMedico dados) {

        var medico = repository.getReferenceById(dados.id());
        medico.atualizarInformacoes(dados);

    }

    @DeleteMapping("/{id}")
    @org.springframework.transaction.annotation.Transactional
    public void excluir(@PathVariable Long id) {
        repository.deleteById(id);
    }


}
